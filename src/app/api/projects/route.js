import connectDB from "@/lib/mongodb";
import Project from "@/models/Projects";


export async function GET() {
  await connectDB();

  const projects = await Project.find();

  return Response.json({ success: true, projects });
}


export async function POST(request) {
  await connectDB();

  const { title, category, description } = await request.json();

  const project = await Project.create({ title, category, description });

  return Response.json({ success: true, project });
}