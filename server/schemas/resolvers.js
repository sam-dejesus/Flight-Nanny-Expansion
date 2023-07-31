const Passenger = require('../models/Passenger')
const User = require('../models/User')
const Children = require('../models/Children')

const resolvers = {
    Query: {
        passengers: async () =>{
            return await Passenger.find({})
        },

        Flight_number: async (parent, { Flight_number }) => {
            return await Passenger.find({ Flight_number });
        }

    },
    Mutation: {
        addPassenger: async (parent, { first_name, last_name, Nanny, phone_number, email, children }) => {
    
          return await Passenger.create({ first_name, last_name, Nanny, phone_number, email, children });
        },
        
        updatePassenger: async (parent, args) => {
            const { _id, ...updateData } = args;
            // `updateData` will contain the fields to update (first_name, last_name, Flight_number, etc.)
      
            try {
              // Use Mongoose's `findByIdAndUpdate` to update the passenger data by ID
              const updatedPassenger = await Passenger.findByIdAndUpdate(_id, updateData, {
                new: true, // Return the updated passenger after the update
              });
      
              return updatedPassenger;
            } catch (error) {
              // Handle any error that might occur during the update process
              throw new Error('Failed to update passenger data.');
            }
        }
      },
}

module.exports = resolvers;