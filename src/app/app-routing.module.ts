import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  CallbackComponent,
  CongregacionShowComponent,
  ContrayenteCreateComponent,
  MatrimonioCreateComponent,
  MatrimonioShowComponent,
  PastorShowComponent,
} from './shared/pages';
import {AppComponent} from './app.component';
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'pastores',
    component: PastorShowComponent
  },
  {
    path: 'congregaciones',
    component: CongregacionShowComponent
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
    component: MatrimonioCreateComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'home',
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
