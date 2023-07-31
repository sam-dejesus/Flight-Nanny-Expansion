const { Schema, model } = require('mongoose');

const childrenSchema = new Schema({
    id: {
        type: Number,
        required: true
      },
      first_name: {
        type: String,
        required: true
      },
      guardian: { 
        type: Schema.Types.ObjectId,
        ref: 'Passenger' 
        }
});

const Children = model('Children', childrenSchema);

module.exports = Children;