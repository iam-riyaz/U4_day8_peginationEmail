const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://riyazMongo:Riyaz123@cluster0.nfiqb.mongodb.net/second_db?retryWrites=true&w=majority"
  );
};
