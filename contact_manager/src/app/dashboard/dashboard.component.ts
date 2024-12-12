import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model'; // Import the model

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contacts: Contact[] = []; // Declare the contacts array with the Contact type

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchContacts();
  }

  fetchContacts(): void {
    this.http.get<Contact[]>('http://localhost:3000/contacts')
      .subscribe(data => {
        this.contacts = data;
      });
  }

  addContact(): void {
    this.router.navigate(['/add']); // Navigate to the Add Contact page
  }

  editContact(id: string): void {
    this.router.navigate([`/edit/${id}`]); // Navigate to the Edit Contact page
  }

  deleteContact(id: string): void {
    this.http.delete(`http://localhost:3000/contacts/${id}`)
      .subscribe(() => {
        this.fetchContacts(); // Refresh the contacts list after deletion
      });
  }
}
