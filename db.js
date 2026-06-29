const mongoose = require('mongoose');

const mongourl = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongourl);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = db;