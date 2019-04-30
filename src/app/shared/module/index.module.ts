import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatrimonioShowComponent, PastorCreateModalComponent, PastorShowComponent} from '../pages';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from '../../app-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

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
    MatDialogModule,
    AngularFontAwesomeModule,
    MatTooltipModule,
    MatSelectModule,
  ],
  exports: [],
  entryComponents: [
    PastorCreateModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule {
}
