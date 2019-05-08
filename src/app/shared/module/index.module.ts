import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ContrayenteCreateComponent,
  IglesiaCreateModalComponent,
  IglesiaShowComponent, MatrimonioCreateComponent,
  MatrimonioShowComponent,
  PastorCreateModalComponent,
  PastorShowComponent
} from '../pages';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from '../../app-routing.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToasterModule} from 'angular2-toaster';

@NgModule({
  // All components
  declarations: [
    PastorShowComponent,
    PastorCreateModalComponent,
    MatrimonioShowComponent,
    IglesiaShowComponent,
    IglesiaCreateModalComponent,
    ContrayenteCreateComponent,
    MatrimonioCreateComponent,
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
    ReactiveFormsModule,
    FormsModule,
    ToasterModule.forRoot(),
    MatPaginatorModule,
  ],
  exports: [],
  entryComponents: [
    PastorCreateModalComponent,
    IglesiaCreateModalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule {
}
