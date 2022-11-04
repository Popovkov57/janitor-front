import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from "./_gards/auth.guard";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent, title: "Home", canActivate: [AuthGuard],
      children: [
        { path: "dashboard", component: DashboardComponent, title: "Dashboard" },
        { path: "customers", component: CustomersComponent, title: "Clients" },
        { path: "partners", component: PartnersComponent, title: "Partenaires" },
        { path: "requests", component: RequestsComponent, title: "Demandes" },
        //{ path: "**", redirectTo: "product" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
