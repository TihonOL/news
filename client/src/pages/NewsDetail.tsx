import { useParams, Link } from 'react-router-dom';
import BiasBar from '@/components/news/BiasBar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

import axiosInstance from '@/axiosInstance';

interface NewsItem {
  id: string;
  title: string;
  text: string;
  imageURL?: string;
  original_date: string;
  bias?: {
    left: number;
    center: number;
    right: number;
  };
  sources?: Array<{
    name: string;
    bias: string;
    url?: string;
  }>;
}

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axiosInstance
      .get(`/news/${id}`)
      .then((res) => {
        setNews(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load news article');
        setLoading(false);
      });
    
        axiosInstance
      .post(`/profile/add-history/${id}`, { userId: user.id })
      .then((res) => console.log(res))
      .catch(console.log);
  }, [id]);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">{error}</h2>
        <Button asChild>
          <Link to="/news">Back to news list</Link>
        </Button>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">News article not found</h2>
        <Button asChild>
          <Link to="/news">Back to news list</Link>
        </Button>
      </div>
    );
  }

  const formattedDate = news.original_date
    ? new Date(news.original_date)
        .toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replace(/\//g, '.')
    : '';

  return (
    <div>
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/news">
          <ArrowLeft size={16} className="mr-2" />
          Вернуться к новостной ленте
        </Link>
      </Button>


      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <h2 className="text-1xl font-bold mb-4">Источник: {news.source}</h2>
      <h2 className="text-1xl font-bold mb-4">{news.author ? `Автор: ${news.author}`: ''}</h2>

      <p className="text-muted-foreground mb-6">{formattedDate}</p>



      {news.imageURL && (
        <img
          src={news.imageURL}
          alt={news.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      <p className="text-lg mb-8">{news.text}</p>

      <Separator className="my-8" />

      <div className="flex justify-between items-center gap-4">
        <Button
          variant="default"
          className="bg-yellow-500 hover:bg-yellow-600 text-white"
        >
          <Link onClick={handleAddToFavorites} to="#">
            Добавить в избранное
          </Link>
        </Button>

        <Button variant="default" className="bg-red-500 hover:bg-red-600 text-white">
          <Link to="#">Внести в черный список</Link>
        </Button>
      </div>

      {news.bias && (
        <div className="mb-8">
          <h3 className="section-heading">Political Bias</h3>
          <BiasBar
            left={news.bias.left || 0}
            center={news.bias.center || 0}
            right={news.bias.right || 0}
          />
        </div>
      )}

      {news.sources && (
        <div>
          <h3 className="section-heading">Media Bias</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Left</h4>
              <ul className="text-sm">
                {news.sources
                  .filter((s) => s.bias === 'left')
                  .map((s, i) => (
                    <li key={i}>{s.name}</li>
                  ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Center</h4>
              <ul className="text-sm">
                {news.sources
                  .filter((s) => s.bias === 'center')
                  .map((s, i) => (
                    <li key={i}>{s.name}</li>
                  ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Right</h4>
              <ul className="text-sm">
                {news.sources
                  .filter((s) => s.bias === 'right')
                  .map((s, i) => (
                    <li key={i}>{s.name}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
