import mongoose from "mongoose";

const HighlightSchema = new mongoose.Schema({
  img: String,
  location: String,
  distance: String,
  google: String,
  id: String,
});

export default mongoose.models?.Highlight ||
  mongoose.model("Highlight", HighlightSchema);
