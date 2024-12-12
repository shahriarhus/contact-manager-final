import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model'; // Import the model

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact = { _id: '', name: '', email: '', number: 0 }; // Initialize with empty values
  private contactId: string = '';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.contactId = this.route.snapshot.paramMap.get('id')!; // Get the contact ID from the URL
    this.fetchContact();
  }

  fetchContact(): void {
    this.http.get<Contact>(`http://localhost:3000/contacts/${this.contactId}`)
      .subscribe(contact => {
        this.contact = contact;
      });
  }

  saveContact(): void {
    this.http.put<Contact>(`http://localhost:3000/contacts/${this.contactId}`, this.contact)
      .subscribe(() => {
        this.router.navigate(['/']); // Redirect to the dashboard after saving
      });
  }

  cancel(): void {
    this.router.navigate(['/']); // Redirect to the dashboard without saving
  }
}
