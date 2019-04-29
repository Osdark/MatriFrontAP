import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PastorShowComponent} from '../pages';
import {MatFormFieldModule, MatIconModule, MatInputModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  // All components
  declarations: [PastorShowComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    AppRoutingModule
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule {
}
