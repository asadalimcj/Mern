const mongoose = require("mongoose");
const mongoConnection = async () => {
  const url =
    "mongodb+srv://asadalimcj:w3OyL66kT4eMnaz1@zearsports.w5h4a.mongodb.net/realEstate";
  try {
    const response = await mongoose.connect(url);
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = mongoConnection