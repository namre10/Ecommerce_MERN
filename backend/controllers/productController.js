const Product = require("../models/productModels");

const ErrorHandler = require("../utils/errorhandler");

//Create new Product  -- /api/v1/product/newProduct
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  console.log(product);
  res.status(201).json({
    success: true,
    product,
  });
};

//Get all products --  /api/v1/product
exports.getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(202).json({
    success: true,
    count: products.length,
    products,
  });
};

//Get single product --  /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(202).json({
    success: true,
    product,
  });
};

//Update products --  /api/v1/product/:id
exports.UpdateProducts = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(202).json({
    success: true,
    product,
  });
};

//Delete product --  /api/v1/product/:id
exports.DeleteProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product Not Found",
    });
  }

  await product.remove();

  res.status(202).json({
    success: true,
    message: "Product Deleted",
  });
};

//Search Product -- /api/v1/SearchProduct/:key
exports.searchProduct = async (req, res) => {
  let product = await Product.find({
    $or: [
      {
        title: { $regex: req.params.key },
      },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(product);
};
