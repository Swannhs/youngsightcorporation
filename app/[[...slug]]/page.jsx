import { notFound } from "next/navigation";
import { getPageDocument, pageExists } from "../../lib/site-page";

export async function generateMetadata({ params }) {
  const slug = params?.slug ?? [];

  if (!(await pageExists(slug))) {
    return {};
  }

  const document = await getPageDocument(slug);
  return {
    title: document.title
  };
}

export default async function SitePage({ params }) {
  const slug = params?.slug ?? [];

  if (!(await pageExists(slug))) {
    notFound();
  }

  const document = await getPageDocument(slug);

  return <div dangerouslySetInnerHTML={{ __html: document.body }} />;
}
