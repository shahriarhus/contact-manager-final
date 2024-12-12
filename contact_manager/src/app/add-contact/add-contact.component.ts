// src/app/add-contact/add-contact.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service'; // Import the ContactService
import { Contact } from '../models/contact.model'; // Import the Contact model

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: Contact = { _id: '', name: '', email: '', number: 0 }; // Initialize the contact object

  constructor(private contactService: ContactService, private router: Router) {}

  saveContact(): void {
    this.contactService.addContact(this.contact).subscribe(
      () => {
        this.router.navigate(['/']); // Redirect to dashboard after saving the contact
      },
      (error) => {
        console.error('Error adding contact', error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/']); // Redirect to dashboard without saving
  }
}
