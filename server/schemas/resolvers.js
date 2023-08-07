const Passenger = require('../models/Passenger')
const User = require('../models/User')
const Children = require('../models/Children')
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        passengers: async () =>{
            return await Passenger.find({})
        },

        flight_number: async (parent, { flight_number }) => {
            return await Passenger.find({ flight_number });
        }

    },
    Mutation: {
        addPassenger: async (parent, { firstname, lastname, phonenumber, email, children, price, flight_number }) => {
    
          return await Passenger.create({ firstname, lastname, phonenumber, email, children, price, flight_number });
        },
        
        updatePassenger: async (parent, args) => {
            const { _id, ...updateData } = args;
            // `updateData` will contain the fields to update (first_name, last_name, flight_number, etc.)
      
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
        },
        
        // creates a new user with token
        addUser: async (parent, args) => {
          try {
            const newUser = new User({
              firstname: args.firstname,
              lastname: args.lastname,
              phonenumber: args.phonenumber,
              username: args.username,
              email: args.email,
              password: args.password,
              status: args.status
            });
            
            const token = signToken(newUser);
      
            // Save the user to the database
            const savedUser = await newUser.save();
            
    
            // Return the saved user object, including the email
            return {token, savedUser}
          } catch (error) {
            throw new Error('Error creating user: ' + error.message);
          }
        },
    

        login: async (parent, { username, password }) => {
          const user = await User.findOne({ username });
    
          if (!user) {
            throw new AuthenticationError('No user found with this username address');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
      },
}

module.exports = resolvers;

 