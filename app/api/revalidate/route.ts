import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// POST /api/revalidate
// Llamado por Xypnotic OS después de publicar un artículo
// Regenera la página sin necesidad de rebuild completo
export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { slug } = body;

  if (!slug) {
    return NextResponse.json({ error: "slug es requerido" }, { status: 400 });
  }

  try {
    // Revalidate the specific article page
    revalidatePath(`/licencia-${slug}`);
    // Also revalidate sitemap and home
    revalidatePath("/");
    revalidatePath("/sitemap.xml");

    return NextResponse.json({
      success: true,
      revalidated: [`/licencia-${slug}`, "/"],
      slug,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// GET for health check
export async function GET() {
  return NextResponse.json({ status: "ok", endpoint: "revalidate" });
}
