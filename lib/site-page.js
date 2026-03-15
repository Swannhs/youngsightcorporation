import { readFile } from "node:fs/promises";
import path from "node:path";

const SOURCE_DIR = path.join(process.cwd(), "source-pages");

const htmlPagePattern = /\b([a-z0-9-]+)\.html\b/gi;

function normalizePageHref(target) {
  if (target === "index.html") return "/";
  return `/${target.replace(/\.html$/i, "")}`;
}

function rewriteMarkup(markup) {
  return markup
    .replace(/(["'(=])\.?\/?assets\//g, "$1/assets/")
    .replace(/(href|action)=["']([^"']+\.html)["']/gi, (_match, attr, target) => {
      return `${attr}="${normalizePageHref(target)}"`;
    })
    .replace(/(["'])index\.html(["'])/gi, "$1/$2")
    .replace(/<script[\s\S]*?<\/script>/gi, "");
}

export function resolveSourceFile(slug = []) {
  if (slug.length === 0) return "index.html";
  const pageName = slug.join("/");
  return pageName.endsWith(".html") ? pageName : `${pageName}.html`;
}

export async function getPageDocument(slug = []) {
  const fileName = resolveSourceFile(slug);
  const fullPath = path.join(SOURCE_DIR, fileName);
  const html = await readFile(fullPath, "utf8");

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? rewriteMarkup(bodyMatch[1]) : "";

  return {
    title: titleMatch ? titleMatch[1].trim() : "Bexon",
    body
  };
}

export async function pageExists(slug = []) {
  try {
    await getPageDocument(slug);
    return true;
  } catch {
    return false;
  }
}
