const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    category: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },

    price: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);

// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Please enter Product name"],
//     trim: true,
//     maxLength: [100, "Product name cannot exceed 100 Characters"],
//   },
//   price: {
//     type: Number,
//     required: [true, "Please enter Product price"],
//     maxLength: [5, "Product name cannot exceed 5 Characters"],
//     default: 0.0,
//   },
//   description: {
//     type: String,
//     required: [true, "Please enter Product description"],
//   },
//   rating: {
//     type: Number,
//     required: false,
//     default: 0,
//   },
//   images: [
//     {
//       public_id: {
//         type: String,
//         required: true,
//       },
//       url: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
//   category: {
//     type: String,
//     required: [true, "select category for the product"],
//     enum: {
//       values: [
//         "Electronics",
//         "Cameras",
//         "Laptop",
//         "Accessories",
//         "Headphones",
//         "Books",
//         "Food",
//         "Clothes/Shoes",
//         "Beauty/Health",
//         "Sports",
//         "Outdoor",
//         "Homes",
//         "men's clothing",
//       ],
//       message: "Please select correct Category for Product",
//     },
//   },
//   seller: {
//     type: String,
//     required: [true, "Please enter Product Seller"],
//   },
//   stock: {
//     type: String,
//     required: [true, "Please enter Product Stock"],
//     maxLength: [5, "Product name cannot exceed 5 Characters"],
//     default: 0,
//   },
//   numOfReviews: {
//     type: Number,
//     default: 0,
//   },
//   reviews: [
//     {
//       name: {
//         type: String,
//         required: true,
//       },
//       rating: {
//         type: Number,
//         required: true,
//       },
//       comment: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("Product", productSchema);
