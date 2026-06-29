const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ['waiter', 'chef', 'manager'],
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  adress: {
    type: String,
  },
  salary: {
    type: Number,
    required: true
  }
});

//Create Person Model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;