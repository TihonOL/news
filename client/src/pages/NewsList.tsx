import { useEffect, useMemo, useState } from 'react';
import { mockNews, mockUser } from '@/data/mockData';
import NewsCard from '@/components/news/NewsCard';
import { News } from '@/types/news';
import { Separator } from '@/components/ui/separator';
// import axiosInstance from '../../src/';
import axios from 'axios';
import { Key } from 'lucide-react';
import SpinnerUi from '@/components/ui/spinnerUi';
import axiosInstance from '@/axiosInstance';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('/api/news')
      .then((res) => setNews(res.data))
      .catch(console.log);
  }, []);

  const [whiteNews, setWhiteNews] = useState([]);

  useEffect(() => {
    axiosInstance
      .get('/whitelist')
      .then((res) => setWhiteNews(res.data))
      .catch(console.error);
  }, []);

  // console.log(news);

  const whitelistTags = mockUser.tags.whitelist;
  const blacklistTags = mockUser.tags.blacklist;

  const filteredNews = useMemo(() => {
    return mockNews
      .filter((news) => {
        // If there are whitelist tags, at least one news tag must be in the whitelist
        const hasWhitelistMatch =
          whitelistTags.length === 0 ||
          news.tags.some((tag) => whitelistTags.includes(tag));

        // News must not have any tags that are in the blacklist
        const hasBlacklistMatch = news.tags.some((tag) => blacklistTags.includes(tag));

        return hasWhitelistMatch && !hasBlacklistMatch;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [whitelistTags, blacklistTags]);

  if (news.length === 0) {
    return (
      <div>
        <SpinnerUi />
      </div>
    );
  }

  // if (whiteNews.length === 0) {
  //   return (
  //     <div>
  //       <SpinnerUi />
  //     </div>
  //   );
  // }

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
          {whiteNews.map((el) => (
            // размап новостей
            <NewsCard key={el.id} whiteNews={el} />
          ))}
          {/* { whiteNews.map((el) => (
            </>
          )) } */}
          {/* {filteredNews.map((news) => (
            // размап новостей
            <NewsCard key={news.id} news={news} />
          ))} */}
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
