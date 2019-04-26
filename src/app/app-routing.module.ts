import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PastorShowComponent} from './shared/pages';

const routes: Routes = [
  {
    path: 'pastores',
    component: PastorShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
