const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/Greenhouse'; // Replace with your MongoDB server URL and database name

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Check for successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  
  // Use the Mongoose models and schemas here
});
