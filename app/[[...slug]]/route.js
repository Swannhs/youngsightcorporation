import { readFile } from "node:fs/promises";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");

const resolvePagePath = (slug = []) => {
  if (slug.length === 0) {
    return path.join(PUBLIC_DIR, "index.html");
  }

  const last = slug[slug.length - 1];
  const relativePath = last.endsWith(".html") ? slug.join("/") : `${slug.join("/")}.html`;
  return path.join(PUBLIC_DIR, relativePath);
};

export async function GET(_request, context) {
  const slug = (await context.params)?.slug ?? [];
  const filePath = resolvePagePath(slug);

  try {
    const html = await readFile(filePath, "utf8");
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8"
      }
    });
  } catch {
    return new Response("Not Found", { status: 404 });
  }
}
