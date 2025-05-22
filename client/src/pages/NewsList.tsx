import { useMemo } from 'react';
import { mockNews, mockUser } from '@/data/mockData';
import NewsCard from '@/components/news/NewsCard';
import { News } from '@/types/news';
import { Separator } from '@/components/ui/separator';

const NewsList = () => {
  const whitelistTags = mockUser.tags.whitelist;
  const blacklistTags = mockUser.tags.blacklist;

  const filteredNews = useMemo(() => {
    return mockNews
      .filter((news) => {
        const hasWhitelistMatch =
          whitelistTags.length === 0 ||
          news.tags.some((tag) => whitelistTags.includes(tag));

        const hasBlacklistMatch = news.tags.some((tag) => blacklistTags.includes(tag));

        return hasWhitelistMatch && !hasBlacklistMatch;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [whitelistTags, blacklistTags]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">News</h1>
      {whitelistTags.length > 0 && (
        <p className="text-muted-foreground mb-8">
          Filtered by tags: {whitelistTags.join(', ')}
        </p>
      )}

      <Separator className="my-6" />

      {filteredNews.length > 0 ? (
        <div className="space-y-6">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Нет новостей, подходящих под выбранные фильтры.
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsList;
