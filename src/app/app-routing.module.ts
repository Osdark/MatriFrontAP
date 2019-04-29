import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PastorShowComponent} from './shared/pages';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: 'pastores',
    component: PastorShowComponent
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
