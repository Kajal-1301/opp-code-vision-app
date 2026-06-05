import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function PUT(request, { params }) {
  await connectDB();
  const { id } = await params;
  const { name, initials, role, review, tag } = await request.json();
  const testimonial = await Testimonial.findByIdAndUpdate(
    id,
    { name, initials, role, review, tag },
    { new: true }
  );
  return Response.json({ success: true, testimonial });
}

export async function DELETE(request, { params }) {
  await connectDB();
  const { id } = await params;
  await Testimonial.findByIdAndDelete(id);
  return Response.json({ success: true, message: "Deleted" });
}