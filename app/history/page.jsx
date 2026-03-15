import HtmlPage from '@/components/HtmlPage';
import { title, body } from '@/content/history';

export const metadata = {
  title
};

export default function Page() {
  return <HtmlPage body={body} />;
}
