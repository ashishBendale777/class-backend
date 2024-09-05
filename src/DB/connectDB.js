const mongoose = require("mongoose");

const connectDB = async () => {
  const connection = await mongoose.connect(
    "mongodb://localhost:27017/classDB"
  );
  console.log(connection.connection.name);
};

module.exports = connectDB;
