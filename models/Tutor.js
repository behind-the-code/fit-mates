import mongoose from "mongoose";

const arrayLimit = (val) => {
  return val.length <= 3;
};

const TutorSchema = new mongoose.Schema({
  name: String,
  type: String,
  fee: {
    type: Number,
    default: 0,
  },
  description: String,
  short_description: String,
  detail_description: String,
  img_url: String,
  detail_img_url: String,
  hashTags: {
    type: [String],
    validate: [arrayLimit]
  },
  region: {
    type: [String],
  },
  expert: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});



const model = mongoose.model("Tutor", TutorSchema);
export default model;
