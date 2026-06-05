import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function GET() {
  await connectDB();
  const messages = await Contact.find().sort({ createdAt: -1 });
  return Response.json({ success: true, messages });
}

export async function POST(request) {
  try {
    await connectDB();

    const { name, email, subject, message } = await request.json();

    await Contact.create({ name, email, subject, message });

    return Response.json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}