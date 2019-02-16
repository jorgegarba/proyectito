import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//importando el componente de HEROES
import { HeroesComponent } from './components/heroes/heroes.component';

const rutas:Routes = [
  {
    path:'heroes',
    component: HeroesComponent
  }
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
