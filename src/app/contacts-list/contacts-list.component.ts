import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  private contacts: Observable<Array<Contact>>;

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }

  trackById(index: number, contact: Contact): string | number {
    return contact.id;
  }

}
