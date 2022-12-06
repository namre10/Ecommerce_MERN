const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URL, (con) => {
    console.log(`MongoDB Database Connected with Host: LOCALHOST`);
  });
};

module.exports = connectDatabase;
