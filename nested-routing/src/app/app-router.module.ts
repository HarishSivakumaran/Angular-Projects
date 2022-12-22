import { HomeComponent } from './Home/Home.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: 'Home',
    component: AppComponent,
    pathMatch: 'full',
    children: [{ path: 'abc', component: HomeComponent }],
  },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
