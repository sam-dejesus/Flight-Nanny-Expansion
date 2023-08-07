const { Schema, model } = require('mongoose');

// Define the schema for the passengers collection
const passengerSchema = new Schema({
  id: {
    type: Number,
    required: false
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  flight_number: {
    type: String,
    required: false
  },

  phonenumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true,
  },
  children: {
    type: String,
    required: true,
    min: 0,
  }
});

// Create the Passenger model
const Passenger = model('Passenger', passengerSchema);

module.exports = Passenger;
