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

export interface Travel {
  fullPrice: number;
  dateStart: Date;
  dateEnd: Date;
  placeName: string;
  placeHost: string;
  img: string;
}

export default mongoose.models?.Travel ||
  mongoose.model("Travel", TravelSchema);
