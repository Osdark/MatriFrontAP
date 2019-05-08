import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ContrayenteCreateComponent,
  IglesiaCreateModalComponent,
  IglesiaShowComponent,
  MatrimonioShowComponent,
  PastorCreateModalComponent,
  PastorShowComponent
} from '../pages';
import {
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
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
import {NbLayoutModule, NbSidebarModule, NbThemeModule} from '@nebular/theme';

@NgModule({
  // All components
  declarations: [
    PastorShowComponent,
    PastorCreateModalComponent,
    MatrimonioShowComponent,
    IglesiaShowComponent,
    IglesiaCreateModalComponent,
    ContrayenteCreateComponent,
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
