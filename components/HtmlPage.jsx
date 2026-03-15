export default function HtmlPage({ body }) {
  return <div dangerouslySetInnerHTML={{ __html: body }} />;
}
