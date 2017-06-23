import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';
import { ContactsService } from './contacts.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent implements OnInit {

  private contacts:Contact[];
  private contactsService: ContactsService;

  constructor(contactsService:ContactsService) {
    this.contactsService=contactsService;
  }

  ngOnInit(): void {
    this.contacts=this.contactsService.getContacts();
  }

}
