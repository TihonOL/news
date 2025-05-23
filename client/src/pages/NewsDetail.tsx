import { useParams, Link } from 'react-router-dom';
import BiasBar from '@/components/news/BiasBar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import axiosInstance from '@/axiosInstance';
import { mockNews } from '@/data/mockData';

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
  source?: string; // добавил, т.к. используете news.source
  author?: string; // добавил, т.к. используете news.author
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

  const olol = { ...news, bias : {
    left: 0,
    center: 0,
    right: 0  
  } }; 
  console.log({ olol, news, mockNews, id });

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
  console.log(news?.source);
  if (news?.source === 'RBC.ru') {
    olol.bias.center = 10;
    olol.bias.left = 20;
    olol.bias.right = 70;
  }

  if (news?.source === 'Lenta.ru') {
    olol.bias.center = 3;
    olol.bias.left = 80;
    olol.bias.right = 17;
  }

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
      <h2 className="text-1xl font-bold mb-4">
        {news.author ? `Автор: ${news.author}` : ''}
      </h2>

      <p className="text-muted-foreground mb-6">{formattedDate}</p>

      {news.imageURL && (
        <img
          src={news.imageURL}
          alt={news.title}
          className="min-w-[110%] w-[110%] h-auto max-h-64 object-contain mx-auto rounded-md"
        />
      )}

      <p className="text-lg mb-8">{news.text}</p>

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
          left={olol.bias.left || 0}
          center={olol.bias.center || 0}
          right={olol.bias.right || 0}
        />
      </div>
    </div>
  );
};

export default NewsDetail;
