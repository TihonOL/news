import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { mockUser, mockNews } from '@/data/mockData';
import NewsCard from '@/components/news/NewsCard';
import { useEffect, useState } from 'react';
import axiosInstance from '@/axiosInstance';

const Profile = ({ user }) => {
  const userFavorites = mockNews.filter((news) => mockUser.favorites.includes(news.id));
  const userHistory = mockNews.filter((news) => mockUser.history.includes(news.id));

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/profile/favorites/${user.data.id}`).then(({ data }) => {
      setFavorites(data.favorites);
      
    });
  }, []);

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
          <AvatarFallback>{user.data.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{user.data.name}</h1>
          <p className="text-muted-foreground">{user.data.email}</p>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Избранное</h2>
        {userFavorites.length > 0 ? (
          <div className="space-y-6">
            {favorites?.map((news) => (
              <NewsCard key={news.id} news={news.news} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Нет добавленных новостей в избранное.</p>
        )}
      </div>

      <Separator className="my-8" />

      <div>
        <h2 className="text-2xl font-bold mb-6">История просмотров</h2>
        {userHistory.length > 0 ? (
          <div className="space-y-6">
            {userHistory.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Ваша история просмотров пуста.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
