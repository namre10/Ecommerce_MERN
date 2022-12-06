const Product = require("../models/productModels");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const products = require("../data/Product");

//Setting dotenv file
dotenv.config({ path: "backend/config/.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("All Products Deleted");

    await Product.insertMany(products);
    console.log("Products Added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
