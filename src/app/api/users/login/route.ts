import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please provide all the required fields" },
        { status: 400 }
      );
    }

    //check if user already exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User not found. Please signup first" },
        { status: 400 }
      );
    }

    const validUser = await bcrypt.compare(password, user.password);

    if (!validUser) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const tokendata = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokendata, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "User logged in successfully",
      success: true,
      user,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
