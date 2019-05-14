import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CongregacionShowComponent,
  ContrayenteCreateComponent,
  MatrimonioCreateComponent,
  MatrimonioShowComponent,
  PastorCreateModalComponent,
  PastorShowComponent
} from '../pages';
import {
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatPaginatorModule,
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
import {NbButtonModule, NbCardModule, NbStepperModule} from '@nebular/theme';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';


@NgModule({
  // All components
  declarations: [
    PastorShowComponent,
    PastorCreateModalComponent,
    MatrimonioShowComponent,
    ContrayenteCreateComponent,
    MatrimonioCreateComponent,
    CongregacionShowComponent,
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
    NbStepperModule,
    NbButtonModule,
    NgxMatSelectSearchModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    NbCardModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [],
  entryComponents: [
    PastorCreateModalComponent,
    ContrayenteCreateComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule {
}
