import HtmlPage from '@/components/HtmlPage';
import { title, body } from '@/content/blog';

export const metadata = {
  title
};

export default function Page() {
  return <HtmlPage body={body} />;
}
