const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Database connected host: ${connect.connection.host}`);
    console.log(`Database name: ${connect.connection.name}`);
  } catch (err) {
    console.log(err);
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
