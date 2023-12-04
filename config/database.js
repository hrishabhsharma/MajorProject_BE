const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);


const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      connectTimeoutMS: 10000,
      minPoolSize: 100,
      socketTimeoutMS: 0,
    });

    console.log('Successfully Established Connection with MongoDB');
  } catch (error) {
    console.log(
      `Failed to Establish Connection with MongoDB with Error: ${error}`,
    );
  }
};

connect();

module.exports = mongoose;
