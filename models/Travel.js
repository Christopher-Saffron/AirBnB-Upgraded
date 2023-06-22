import mongoose from "mongoose";

const TravelSchema = new mongoose.Schema({
  fullPrice: {
    type: Number,
  },
  dateStart: {
    type: Date,
  },
  dateEnd: {
    type: Date,
  },
  placeName: {
    type: String,
  },
  placeHost: {
    type: String,
  },
  img: {
    type: String,
  },
});

export default mongoose.models?.Travel ||
  mongoose.model("Travel", TravelSchema);
