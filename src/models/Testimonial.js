import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    name: String,
    initials: String,
    role: String,
    review: String,
    tag: String,
  },
  {
    timestamps: true,
  }
);

 const Testimonial = mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);

  export default Testimonial;