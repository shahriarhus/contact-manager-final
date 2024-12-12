// src/app/dashboard/dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'; // Import the ContactService
import { Contact } from '../models/contact.model'; // Import the Contact model

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contacts: Contact[] = []; // Array to hold contacts

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  // Load contacts from the backend
  loadContacts(): void {
    this.contactService.getContacts().subscribe(
      (data: Contact[]) => {
        this.contacts = data; // Assign the fetched contacts to the 'contacts' array
      },
      (error) => {
        console.error('Error fetching contacts', error);
      }
    );
  }

  // Navigate to the add contact component
  addContact(): void {
    // Redirect to the AddContactComponent (using Angular's Router)
  }

  // Edit contact
  editContact(id: string): void {
    // Navigate to the EditContactComponent with the contact's ID
  }

  // Delete contact
  deleteContact(id: string): void {
    this.contactService.deleteContact(id).subscribe(
      () => {
        this.loadContacts(); // Reload contacts after deletion
      },
      (error) => {
        console.error('Error deleting contact', error);
      }
    );
  }
}
