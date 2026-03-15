import HtmlPage from '@/components/HtmlPage';
import { title, body } from '@/content/index-3';

export const metadata = {
  title
};

export default function Page() {
  return <HtmlPage body={body} />;
}
