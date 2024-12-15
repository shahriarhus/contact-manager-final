# Contact Manager Application

## Overview

This is a simple contact manager application built using Angular and Express.js. The application allows users to add, edit, and delete contacts. [Click here](#howto) for more instructions.

## Features

* Add new contacts with name, email, and phone number
* Edit existing contacts
* Delete contacts
* Display a list of all contacts

## Technologies Used

* Frontend: Angular 18.2.13
* Backend: Express.js 4.17.1
* Database: MongoDB

## Project Structure

The project is divided into two main folders:

* `contact_manager`: This folder contains the Angular frontend code.
* `server`: This folder contains the Express.js backend code.

## Installation

To run the application, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in the `contact_manager` folder.
3. Start the Angular development server by running `ng serve` in the `contact_manager` folder.
4. Install the dependencies by running `npm install` in the `server` folder.
5. Start the Express.js server by running `node server.js` in the `server` folder.

## Configuration

The application uses a MongoDB database to store contacts. You will need to create a MongoDB database and update the `server/server.js` file with your database connection details.

## API Endpoints

The Express.js server provides the following API endpoints:

* `GET /contacts`: Returns a list of all contacts.
* `POST /contacts`: Creates a new contact.
* `GET /contacts/:id`: Returns a single contact by ID.
* `PUT /contacts/:id`: Updates a contact by ID.
* `DELETE /contacts/:id`: Deletes a contact by ID.

## Angular Components

The Angular application consists of the following components:

* `app.component`: The main application component.
* `dashboard.component`: Displays a list of all contacts.
* `add-contact.component`: Allows users to add new contacts.
* `edit-contact.component`: Allows users to edit existing contacts.

## Models

The application uses the following models:

* `contact.model`: Represents a contact with name, email, and phone number.

## Services

The application uses the following services:

* `contact.service`: Provides API endpoints for interacting with the contact database.

## Styles

The application uses CSS styles to layout and design the components. The styles are defined in the `styles.css` file.

<a id="howto"></a>

## Instructions for Installing and Running

### Under Frontend

`ng new contact-app --standalone=false --skip-tests`

#### Angular Material

`ng add @angular/material@18.2.14`

`npm install @angular/material @angular/cdk @angular/animations --save`

#### Generating components

`ng generate component add_contact --skip-tests`

`ng generate component edit_contact --skip-tests`

`ng generate component dashboard --skip-tests`

### Under Backend

`npm init -y`

`npm install express mongoose cors body-parser --save`
