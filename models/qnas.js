const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  english: {
    text: {
      type: String, // origianl string in english
      required: true,
    },
    answer: {
      type: String, // answer of the string in english
      required: true,
    },
  },
  german: {
    text: {
      type: String, // origianl string in english
      required: true,
    },
    answer: {
      type: String, // answer of the string in english
      required: true,
    },
  },
});

module.exports = mongoose.model("qnas", schema);
