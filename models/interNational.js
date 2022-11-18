require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interNationalSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "ScholarShip Name is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    lastDate: {
      type: Date,
      required: [true, "Last Date is required"],
    },
    applyUrl: {
      type: String,
      required: [true, "Apply Url is required"],
    },
    country: {
      type: String,
      required: [true, "Income is required"],
    },
    graduate: {
      type: String,
      required: [true, "Graduate is required"],
    },
  },
  { timestamps: true }
);

const interScholarShip = new mongoose.model(
  "international",
  interNationalSchema
);
module.exports = interScholarShip;
