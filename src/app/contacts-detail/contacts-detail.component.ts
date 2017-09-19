import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  private route:ActivatedRoute;
  private contactsService:ContactsService;
  private contact:Contact;

  constructor(route:ActivatedRoute, contactsService:ContactsService) {
    this.route = route;
    this.contactsService = contactsService;
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact = this.contactsService.getContact(id);
  }

}
