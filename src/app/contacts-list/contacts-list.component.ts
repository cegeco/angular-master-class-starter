import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  private contacts: Contact[];

  constructor(private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.contactsService
      .getContacts()
      .subscribe(contacts => {
        this.contacts = contacts;
      });
  }

  trackById(index: number, contact: Contact): string | number {
    return contact.id;
  }

}
