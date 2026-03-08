import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "비밀번호가 올바르지 않습니다." },
        { status: 401 }
      );
    }

    const sessionSecret = process.env.ADMIN_SESSION_SECRET;
    if (!sessionSecret) {
      return NextResponse.json(
        { error: "서버 설정 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set("admin-session", sessionSecret, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: 86400,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "요청 처리 중 오류가 발생했습니다." },
      { status: 400 }
    );
  }
}
