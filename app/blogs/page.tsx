import { SiteLayout } from '../../src/App';
import { getStaticBlogList } from '../../src/lib/blogStaticData';
import { createPageMetadata } from '../../src/lib/metadata';
import { BlogsPage } from '../../src/views/BlogsPage';

export const metadata = createPageMetadata({
  title: 'Education Insights & Articles | Future Edu Group',
  description: 'Read Future Edu Group articles covering education, hospitality careers, higher education, STEM, and AI-enabled learning.',
  path: '/blogs',
});

export default async function BlogsRoute() {
  const initialList = await getStaticBlogList();

  return <SiteLayout><BlogsPage initialList={initialList} /></SiteLayout>;
}
