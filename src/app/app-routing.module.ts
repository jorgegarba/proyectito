import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//importando el componente de HEROES
import { HeroesComponent } from './components/heroes/heroes.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const rutas:Routes = [
  {
    path:'heroes',
    component: HeroesComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'',
    component: DashboardComponent
  },
  {
    path:'**',
    component: ErrorComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
