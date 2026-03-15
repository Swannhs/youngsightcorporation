import HtmlPage from '@/components/HtmlPage';
import { title, body } from '@/content/index';

export const metadata = {
  title
};

export default function Page() {
  return <HtmlPage body={body} />;
}
