import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IndexModule} from './shared/module/index.module';
import {ServiceModule} from './shared/service/service.module';
import {MatButtonModule, MatMenuModule, MatTooltipModule} from '@angular/material';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ToasterModule} from 'angular2-toaster';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbUserModule
} from '@nebular/theme';
import {AuthService} from "./auth/auth.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IndexModule,
    ServiceModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    ToasterModule,
    NbThemeModule.forRoot({name: 'corporate'}),
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    MatMenuModule,
    NbActionsModule,
    MatTooltipModule,
    NbUserModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
