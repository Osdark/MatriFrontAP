import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ContrayenteCreateComponent,
  IglesiaShowComponent,
  MatrimonioShowComponent,
  PastorShowComponent,
  MatrimonioCreateComponent,
} from './shared/pages';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: 'pastores',
    component: PastorShowComponent
  },
  {
    path: 'iglesias',
    component: IglesiaShowComponent
  },
  {
    path: 'contrayente',
    component: ContrayenteCreateComponent
  },
  {
    path: 'matrimonios',
    component: MatrimonioShowComponent
  },
  {
    path: 'matrimonio/nuevo',
    component: MatrimonioCreateComponent
  },
  {
    path: 'home',
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
