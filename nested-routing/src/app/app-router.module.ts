import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Home/Home.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';

const appRoutes: Routes = [
  {
    path: 'Home',
    component: NavbarComponent,
    children: [{ path: 'test', component: HomeComponent }],
  },
  { path: 'about', component: HomeComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
