import mongoose from "mongoose";

// Defining Schema
const productSchema = new mongoose.Schema({
  title: String,
  brand: String,
  category: String,
  price: String,
  stock: String,
});

const ProductModel = mongoose.models.products || mongoose.model("products", productSchema);

export default ProductModel;
