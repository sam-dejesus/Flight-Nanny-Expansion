const { Schema, model } = require('mongoose');


// Define the schema for the passengers collection
const passengerSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  Flight_number: {
    type: String,
    required: true
  },
  Nanny: {
    type: Boolean,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

// Create the Passenger model
const Passenger = model('Passenger', passengerSchema);

module.exports = Passenger;