import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getPostBySlug } from "@/lib/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { error: "글을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({ post });
  } catch {
    return NextResponse.json(
      { error: "글을 불러올 수 없습니다." },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "글을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    const body = await request.json();
    const { title, description, date, tags, content, published } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "제목과 내용은 필수 항목입니다." },
        { status: 400 }
      );
    }

    const tagArray = Array.isArray(tags) ? tags : [];
    const frontmatter = [
      "---",
      `title: "${title}"`,
      description ? `description: "${description}"` : null,
      `date: "${date || new Date().toISOString().split("T")[0]}"`,
      tagArray.length > 0
        ? `tags: [${tagArray.map((t: string) => `"${t}"`).join(", ")}]`
        : null,
      `published: ${published !== false}`,
      "---",
    ]
      .filter(Boolean)
      .join("\n");

    const fileContent = `${frontmatter}\n\n${content}`;
    fs.writeFileSync(filePath, fileContent, "utf-8");

    return NextResponse.json({ success: true, slug });
  } catch {
    return NextResponse.json(
      { error: "글 수정 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "글을 찾을 수 없습니다." },
        { status: 404 }
      );
    }

    fs.unlinkSync(filePath);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "글 삭제 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
