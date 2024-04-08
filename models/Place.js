import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
  img: String,
  location: String,
  title: String,
  description: String,
  star: String,
  price: String,
  lat: String,
  long: String,
  tags: Array,
  id: String,
  reviews: Number,
  google: String,
  room: String,
});

export default mongoose.models?.Place || mongoose.model("Place", PlaceSchema);
