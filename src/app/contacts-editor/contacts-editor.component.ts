import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  private contact: Contact = <Contact>{ address: {}};
  
  constructor(private route: ActivatedRoute, private contactsService: ContactsService, private router: Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService
      .getContact(id)
      .subscribe(contact => {
        this.contact = contact;
      });
  }

  cancel(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }
  
  save(contact: Contact) {
    this.contactsService
    .updateContact(contact)
    .subscribe(
      data => {
        this.router.navigate(['/contacts', contact.id]);
      },
      error =>
      {
        console.log('Something went wrong when saving');
      }
    );
  }

}
