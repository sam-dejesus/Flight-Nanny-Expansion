const User = require('../models/Passenger')

const resolvers = {
    Query: {
        user: async () =>{
            return await User.find({})
        }
    }
}

module.exports = resolvers;