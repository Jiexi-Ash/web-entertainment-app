import mongoose from "mongoose";

const thumbnailSchema = new mongoose.Schema({
  trending: {
    small: {
      type: String,
      default: "",
    },
    large: {
      type: String,
      default: "",
    },
  },

  regular: {
    small: {
      type: String,
      default: "",
    },
    medium: {
      type: String,
      default: "",
    },
    large: {
      type: String,
      default: "",
    },
  },
});

const showSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: thumbnailSchema,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  isBookmarked: {
    type: Boolean,
    required: true,
    default: false,
  },
  isTrending: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Show = mongoose.models.Show || mongoose.model("Show", showSchema);

export default Show;
