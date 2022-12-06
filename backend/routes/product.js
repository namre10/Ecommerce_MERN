const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  UpdateProducts,
  DeleteProduct,
  searchProduct,
} = require("../controllers/productController");

router.route("/products").get(getProducts);

router.route("/product/newProduct").post(newProduct);

router.route("/products/:id").get(getSingleProduct);

router.route("/admin/products/:id").put(UpdateProducts).delete(DeleteProduct);

router.route("/SearchProduct/:key").get(searchProduct);

module.exports = router;
