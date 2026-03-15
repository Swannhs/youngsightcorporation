import HtmlPage from '@/components/HtmlPage';
import { title, body } from '@/content/shop-details';

export const metadata = {
  title
};

export default function Page() {
  return <HtmlPage body={body} />;
}
