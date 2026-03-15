import HtmlPage from '@/components/HtmlPage';
import { title, body } from '@/content/team-details';

export const metadata = {
  title
};

export default function Page() {
  return <HtmlPage body={body} />;
}
