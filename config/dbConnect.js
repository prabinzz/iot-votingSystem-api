const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
  } catch (error) {}
};

module.exports = dbConnect;
