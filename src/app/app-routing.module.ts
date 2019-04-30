import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PastorShowComponent} from './shared/pages';
import {AppComponent} from './app.component';
import {PastorCreateModalComponent} from './view/masters/pastor/pastor-show/pastor-create-modal/pastor-create-modal.component';

const routes: Routes = [
  {
    path: 'pastores',
    component: PastorShowComponent
  },
  {
    path: 'pastor/nuevo',
    component: PastorCreateModalComponent
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
