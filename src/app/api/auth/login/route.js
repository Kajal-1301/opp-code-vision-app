import connectDB from "@/lib/mongodb";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request) {

      console.log("Login API hit ✅"); // add this line

  try {
    await connectDB();

     console.log("DB connected ✅"); // add this line

    // Get email and password from request

    const { email, password } = await request.json();

   // Check if admin exists in DB

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return Response.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    //  Compare password with hashed password

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return Response.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    //  Create JWT token

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    //  Save token in cookie

    const cookieStore = await cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return Response.json({
      success: true,
      message: "Login successful ✅",
    });

  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}