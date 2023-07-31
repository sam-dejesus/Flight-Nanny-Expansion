const { Schema, model } = require('mongoose');


// Define the schema for the passengers collection
const passengerSchema = new Schema({
  id: {
    type: Number,
    required: false
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
    required: false
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
  },
  children: {
  type: Schema.Types.ObjectId, 
  ref: 'Children' 
  } 
});

// Create the Passenger model
const Passenger = model('Passenger', passengerSchema);

module.exports = Passenger;