import HtmlPage from '@/components/HtmlPage';
import { title, body } from '@/content/careers';

export const metadata = {
  title
};

export default function Page() {
  return <HtmlPage body={body} />;
}
