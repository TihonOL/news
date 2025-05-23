import { useParams, Link } from 'react-router-dom';
import { mockNews } from '@/data/mockData';
import BiasBar from '@/components/news/BiasBar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from '@/axiosInstance';

const NewsDetail = ({ user }) => {
  const [newsId, setNewsId] = useState([]);
  const [favorites, setFavorites] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get(`/api/news/${id}`)
      .then((res) => setNewsId(res.data))
      .catch(console.log);

    axiosInstance
      .post(`/profile/add-history/${id}`, { userId: user.id })
      .then((res) => console.log(res))
      .catch(console.log);
  }, [id]);

  const news = mockNews.find((n) => n.id === id);

  const handleAddToFavorites = async () => {
    const response = await axiosInstance.post(`/profile/add-favorite/${id}`, {
      userId: user.id,
    });

    setFavorites(true);
  };

  if (!newsId) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">News article not found</h2>
        <Button asChild>
          <Link to="/news">Back to news list</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/news">
          <ArrowLeft size={16} className="mr-2" />
          Вернуться к новостной ленте
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-4">{newsId.title}</h1>

      <p className="text-muted-foreground mb-6">
        {newsId.original_date}
        {/* {new Date(news.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })} */}
      </p>

      {newsId.imageURL && (
        <img
          src={newsId.imageURL}
          alt={newsId.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      <p className="text-lg mb-8">{newsId.text}</p>

      <Separator className="my-8" />

      <div className="flex justify-between items-center gap-4">
        {/* Желтая кнопка "нравится" */}
        <Button
          variant="default"
          className="bg-yellow-500 hover:bg-yellow-600 text-white"
        >
          <Link onClick={handleAddToFavorites} to="#">
            Добавить в избранное
          </Link>
        </Button>

        {/* Красная кнопка "в черный список" */}
        <Button variant="default" className="bg-red-500 hover:bg-red-600 text-white">
          <Link to="#">Внести в черный список</Link>
        </Button>
      </div>

      {/* <div className="mb-8">
        <h3 className="section-heading">Действие</h3>
        <ul className="space-y-2">
          
          {news.sources.map((source, index) => (
            <li key={index} className="flex items-center gap-2">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {source.name}
              </a>
              <span className="text-xs text-muted-foreground">({source.bias})</span>
            </li>
          ))}
        </ul>
      </div> */}

      <div className="mb-8">
        <h3 className="section-heading">Political Bias</h3>
        <BiasBar
          left={news.bias.left}
          center={news.bias.center}
          right={news.bias.right}
        />
      </div>

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
    </div>
  );
};

export default NewsDetail;
