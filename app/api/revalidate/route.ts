import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { GITHUB_REVALIDATE_TAG } from "@/lib/github";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");

  if (
    !process.env.REVALIDATE_SECRET ||
    secret !== process.env.REVALIDATE_SECRET
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag(GITHUB_REVALIDATE_TAG, "max");
  revalidatePath("/", "page");
  revalidatePath("/projects", "page");

  return NextResponse.json({
    revalidated: true,
    timestamp: Date.now(),
  });
}
