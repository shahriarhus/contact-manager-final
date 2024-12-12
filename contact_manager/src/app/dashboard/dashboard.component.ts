import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contacts = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.http.get('http://localhost:3000/contacts').subscribe((data: any) => {
      this.contacts = data;
    });
  }

  editContact(id: string) {
    this.router.navigate(['/edit', id]);
  }

  deleteContact(id: string) {
    this.http.delete(`http://localhost:3000/contacts/${id}`).subscribe(() => {
      this.loadContacts();
    });
  }

  addContact() {
    this.router.navigate(['/add']);
  }
}
