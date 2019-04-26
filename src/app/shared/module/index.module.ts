import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PastorShowComponent} from '../pages';
import {MatTableModule} from '@angular/material';

@NgModule({
  // All components
  declarations: [PastorShowComponent],
  imports: [CommonModule, MatTableModule],
  exports: [PastorShowComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule {
}
