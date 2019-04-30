import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatrimonioShowComponent, PastorShowComponent} from '../pages';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from '../../app-routing.module';
import {PastorCreateModalComponent} from '../../view/masters/pastor/pastor-show/pastor-create-modal/pastor-create-modal.component';


@NgModule({
  // All components
  declarations: [
    PastorShowComponent,
    PastorCreateModalComponent,
    MatrimonioShowComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    AppRoutingModule,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule {
}
