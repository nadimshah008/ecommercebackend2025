const mongoose = require("mongoose");
var imageSchema = mongoose.Schema(
  {
    filename: {
        type: String,
        required: true
      },
      path: {
        type: String,
        required: true
      },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("image", imageSchema);
