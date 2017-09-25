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
      .get<ContactsResponse>(`${this.apiEndpoint}/contacts`)
      .map(data => data.items);    
  }

  getContact(id: String): Observable<Contact> {
    return this.http
      .get<ContactResponse>(`${this.apiEndpoint}/contacts/${id}`)
      .map(data => data.item);
  }

  updateContact(contact: Contact): Observable<Object> {
    return this.http
      .put(`${this.apiEndpoint}/contacts/${contact.id}`, contact);
  }

}
