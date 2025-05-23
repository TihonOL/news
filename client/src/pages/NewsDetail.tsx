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
  source?: string;
  author?: string;
  originalURL?: string;
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

interface NewsDetailProps {
  user: { id: string };
}

const NewsDetail = ({ user }: NewsDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState(false);

  useEffect(() => {
    if (!id) {
      setError('Invalid news ID');
      setLoading(false);
      return;
    }

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
  }, [id]);

  const handleAddToFavorites = async () => {
    try {
      await axiosInstance.post(`/profile/add-favorite/${id}`, {
        userId: user.id,
      });
      setFavorites(true);
    } catch (error) {
      console.error('Failed to add to favorites', error);
    }
  };

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

  // Создаем объект с bias значениями по умолчанию
  const newsWithBias = {
    ...news,
    bias: {
      left: 0,
      center: 0,
      right: 0,
      ...news.bias,
    },
  };

  // Устанавливаем значения bias в зависимости от источника
  if (news.source === 'RBC.ru') {
    newsWithBias.bias.center = 10;
    newsWithBias.bias.left = 20;
    newsWithBias.bias.right = 70;
  } else if (news.source === 'Lenta.ru') {
    newsWithBias.bias.center = 3;
    newsWithBias.bias.left = 80;
    newsWithBias.bias.right = 17;
  }

  const formattedDate = news.original_date
    ? new Date(news.original_date)
        .toLocaleDateString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
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
      {news.source && <h2 className="text-1xl font-bold mb-4">Источник: {news.source}</h2>}
      {news.author && <h2 className="text-1xl font-bold mb-4">Автор: {news.author}</h2>}

      <p className="text-muted-foreground mb-6">{formattedDate}</p>

      {news.imageURL && (
        <img
          src={news.imageURL}
          alt={news.title}
          className="min-w-[110%] w-[110%] h-auto max-h-64 object-contain mx-auto rounded-md mb-6"
        />
      )}

      <p className="text-lg mb-8">{news.text}</p>

      {news.originalURL && (
        <a href={news.originalURL} className="text-1xl font-bold mb-4 block">
          Ссылка на первоисточник
        </a>
      )}

      <Separator className="my-8" />

      <div className="flex justify-between items-center gap-4">
        <Button
          variant="default"
          className="bg-yellow-500 hover:bg-yellow-600 text-white"
          onClick={handleAddToFavorites}
          disabled={favorites}
        >
          Добавить в избранное
        </Button>
      </div>

      <div className="mb-8 mt-6">
        <h3 className="section-heading">Политический уклон</h3>
        <BiasBar
          left={newsWithBias.bias.left}
          center={newsWithBias.bias.center}
          right={newsWithBias.bias.right}
        />
      </div>
    </div>
  );
};

export default NewsDetail;