import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, InjectionToken, Inject } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { APP_ROUTES } from './app.routes';
import { API_ENDPOINT } from './data/meta-data';

import { ContactsAppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsService } from './contacts.service';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

const API_ENDPOINT_TOKEN = new InjectionToken<string>('apiEndpoint');
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
    ContactsDetailComponent,
    ContactsEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
