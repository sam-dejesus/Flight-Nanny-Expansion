const db = require('../config/connection');
const  Passenger  = require('../models/Passenger');

const PassengerSeed = require('./passengers.json')

db.once('open', async () =>{
    try {
        await Passenger.deleteMany({});
        await Passenger.create(PassengerSeed);
        console.log('all done!');

    } catch (err) {
        throw err;
      }

});