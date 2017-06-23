import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  private contacts:Contact[];
  private contactsService: ContactsService;

  constructor(contactsService:ContactsService) {
    this.contactsService=contactsService;
  }

  ngOnInit(): void {
    this.contacts=this.contactsService.getContacts();
  }

}
