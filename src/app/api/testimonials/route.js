import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  await connectDB();
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  return Response.json({ success: true, testimonials });
}

export async function POST(request) {
  await connectDB();
  const { name, initials, role, review, tag } = await request.json();
  const testimonial = await Testimonial.create({ name, initials, role, review, tag });
  return Response.json({ success: true, testimonial });
}
