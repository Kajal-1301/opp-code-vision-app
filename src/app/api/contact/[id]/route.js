import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function DELETE(request, { params }) {
  await connectDB();
  const { id } = await params;
  await Contact.findByIdAndDelete(id);
  return Response.json({ success: true, message: "Message deleted" });
}