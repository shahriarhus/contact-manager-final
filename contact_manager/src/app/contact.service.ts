// src/app/contact.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './models/contact.model'; // Import the Contact model

@Injectable({
  providedIn: 'root' // This ensures the service is available throughout the app
})
export class ContactService {

  private apiUrl = 'http://localhost:3000/contacts'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Get all contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.apiUrl); // Send GET request to fetch all contacts
  }

  // Get a specific contact by ID
  getContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}/${id}`); // Send GET request for a single contact
  }

  // Add a new contact
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact); // Send POST request to add a new contact
  }

  // Update an existing contact by ID
  updateContact(id: string, contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/${id}`, contact); // Send PUT request to update contact
  }

  // Delete a contact by ID
  deleteContact(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`); // Send DELETE request to remove a contact
  }
}
