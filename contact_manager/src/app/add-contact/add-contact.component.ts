import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model'; // Import the model

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: Contact = { _id: '', name: '', email: '', number: 0 }; // Initialize with empty values

  constructor(private http: HttpClient, private router: Router) {}

  saveContact(): void {
    this.http.post<Contact>('http://localhost:3000/contacts', this.contact)
      .subscribe(() => {
        this.router.navigate(['/']); // Redirect to the dashboard
      });
  }

  cancel(): void {
    this.router.navigate(['/']); // Redirect to the dashboard without saving
  }
}
