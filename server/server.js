const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());  // Allow cross-origin requests
app.use(express.json());  // Parse incoming JSON requests

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contact_manager', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true }
});

// Define the Contact model
const Contact = mongoose.model('Contact', contactSchema);

// CRUD operations
app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post('/contacts', async (req, res) => {
  const newContact = new Contact(req.body);
  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.put('/contacts/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedContact);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.delete('/contacts/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
