import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getAllPostsAdmin } from "@/lib/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export async function GET() {
  try {
    const posts = getAllPostsAdmin();
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json(
      { error: "글 목록을 불러올 수 없습니다." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, date, tags, slug, content, published } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "제목, 슬러그, 내용은 필수 항목입니다." },
        { status: 400 }
      );
    }

    const safeSlug = slug
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    if (!safeSlug) {
      return NextResponse.json(
        { error: "유효한 슬러그를 입력해주세요." },
        { status: 400 }
      );
    }

    const filePath = path.join(BLOG_DIR, `${safeSlug}.mdx`);

    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "이미 동일한 슬러그의 글이 존재합니다." },
        { status: 409 }
      );
    }

    if (!fs.existsSync(BLOG_DIR)) {
      fs.mkdirSync(BLOG_DIR, { recursive: true });
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

    return NextResponse.json(
      { success: true, slug: safeSlug },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "글 작성 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
