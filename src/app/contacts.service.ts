import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

interface ContactResponse { item : Contact };
interface ContactsResponse { items : Contact[] };

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient, private apiEndpoint: string) {}

  getContacts(): Observable<Array<Contact>> {
    return this.http
      .get<ContactsResponse>(this.apiEndpoint + '/api/contacts')
      .map(data => data.items);    
  }

  getContact(id:String) {
    return this.http
      .get<ContactResponse>(this.apiEndpoint + '/api/contacts/' + id)
      .map(data => data.item);
  }

}
