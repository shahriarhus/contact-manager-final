// src/app/edit-contact/edit-contact.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service'; // Import the ContactService
import { Contact } from '../models/contact.model'; // Import the Contact model

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact = { _id: '', name: '', email: '', number: 0 };

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id'); // Get the contact ID from the route
    if (id) {
      this.contactService.getContact(id).subscribe(
        (data: Contact) => {
          this.contact = data; // Assign the fetched contact to the component's contact object
        },
        (error) => {
          console.error('Error fetching contact', error);
        }
      );
    }
  }

  saveContact(): void {
    this.contactService.updateContact(this.contact._id, this.contact).subscribe(
      () => {
        this.router.navigate(['/']); // Redirect to dashboard after saving the changes
      },
      (error) => {
        console.error('Error updating contact', error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/']); // Redirect to dashboard without making changes
  }
}
