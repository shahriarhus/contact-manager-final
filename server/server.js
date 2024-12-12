// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(cors()); // Allow CORS for cross-origin requests
app.use(bodyParser.json()); // Parse JSON bodies

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contact_manager', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

// Contact schema and model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes for CRUD operations

// Get all contacts
app.get('/contacts', (req, res) => {
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new contact
app.post('/contacts', (req, res) => {
  const { name, email, number } = req.body;

  const newContact = new Contact({
    name,
    email,
    number
  });

  newContact.save()
    .then(() => res.json('Contact added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Get a contact by ID
app.get('/contacts/:id', (req, res) => {
  Contact.findById(req.params.id)
    .then(contact => res.json(contact))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Update a contact
app.put('/contacts/:id', (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(contact => res.json(contact))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a contact
app.delete('/contacts/:id', (req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(() => res.json('Contact deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
