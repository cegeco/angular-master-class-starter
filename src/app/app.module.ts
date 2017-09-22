import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, InjectionToken, Inject } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { APP_ROUTES } from './app.routes';
import { API_ENDPOINT } from './data/meta-data';

import { ContactsAppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsService } from './contacts.service';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

export const API_ENDPOINT_TOKEN = new InjectionToken<string>('apiEndpoint');
export function contactsServiceFactory(http, apiEndpoint) {
  return new ContactsService(http, apiEndpoint);
};

@NgModule({
  providers: [
    {
      provide: API_ENDPOINT_TOKEN,
      useValue: API_ENDPOINT
    },
    {
      provide: ContactsService,
      useFactory: contactsServiceFactory,
      deps: [
        HttpClient,
        API_ENDPOINT_TOKEN
      ]
    }
  ],
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
