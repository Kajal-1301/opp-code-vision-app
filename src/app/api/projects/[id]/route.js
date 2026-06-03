import connectDB from "@/lib/mongodb";
import Project from "@/models/Projects";

export async function PUT(request, { params }) {
  await connectDB();
  const { id } = await params;
  const { title, category, description, icon } = await request.json();

  const project = await Project.findByIdAndUpdate(
    id,
    { title, category, description, icon },
    { new: true }
  );

  return Response.json({ success: true, project });
}

export async function DELETE(request, { params }) {
  await connectDB();
  const { id } = await params;
  await Project.findByIdAndDelete(id);
  return Response.json({ success: true, message: "Project deleted" });
}