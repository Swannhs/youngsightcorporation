import HtmlPage from '@/components/HtmlPage';
import { title, body } from '@/content/blog-right-sidebar';

export const metadata = {
  title
};

export default function Page() {
  return <HtmlPage body={body} />;
}
