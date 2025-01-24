const mongoose = require("mongoose");
var productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    inStock:{
        type:Boolean,
        default:true,
    },
    sku:{
      type:String
    },
    variants: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "products", // Reference to other Product documents
      default: [],
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      //  enum: ['Men', 'Women', 'Kids', 'Unisex', 'Accessories'], // Add categories as needed
    },
    subcategory: {
        type: String,
        required: true,
        //  enum: ['Men', 'Women', 'Kids', 'Unisex', 'Accessories'], // Add categories as needed
      },
    bagsize:{
      type: [String],
      required: true,
    },
    salespackage:{
      type:String
    },
    slots:{
      type:String
    },
    material:{
      type:String
    },
    width:{
      type:String
    },
    height:{
      type:String
    },
    warranty:{
      type:String
    },
    returnpolicy:{
      type:String
    },
    size: {
      type: [String],
      required: true,
      // enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], // Sizes available
    },
    color: {
      type: [String],
      required: true,
    },
    reviews: {
        type: [String],
        required: false,
      },
    crossprice:{
        type: Number,
        min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0, // Discount percentage
      min: 0,
      max: 100,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    images: {
      type: [String], // Array of image URLs
      validate: {
        validator: function (v) {
          return Array.isArray(v) && v.length > 0;
        },
        message: "A product must have at least one image.",
      },
    },
    ratings: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
        min: 0,
      },
    },
    tags: {
      type: [String], // Optional tags for better searchability
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productSchema);
