import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { mockUser, mockNews } from '@/data/mockData';
import NewsCard from '@/components/news/NewsCard';
import { useEffect, useState } from 'react';
import axiosInstance from '@/axiosInstance';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Profile = ({ user }) => {
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/profile/favorites/${user.data.id}`).then(({ data }) => {
      setFavorites(data.favorites);
      axiosInstance.get(`/profile/history/${user.data.id}`).then(({ data }) => {
        setHistory(data);
      });
    });
  }, []);

  const handleDeleteFavorite = async () => {
    await axiosInstance.delete('/profile/favorite/clear');
    setFavorites([]);
  };

  const handleDeleteHistory = async () => {
    await axiosInstance.delete('/profile/history/delete');
    setHistory([]);
  };


  const handleDeleteFavoriteId = async (id) => {
    await axiosInstance.delete(`/profile/favorite/deleteById/${id}`);
    setFavorites((prev) => prev.filter((el) => el.id !== id));
  };

  const handleDeleteHistoryId = async (id) => {
    await axiosInstance.delete(`/profile/history/deleteById/${id}`);
    setHistory((prev) => prev.filter((el) => el.id !== id));
  };


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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Избранное</h2>
          {favorites.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-destructive hover:text-destructive/80"
              onClick={() => handleDeleteFavorite()}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Очистить все
            </Button>
          )}
        </div>
        {favorites.length > 0 ? (
          <div className="space-y-6">
            {favorites.map((favorite) => (
              <div key={favorite.news.id} className="relative group">
                <NewsCard news={favorite.news} />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-destructive/10 text-destructive"
                  onClick={() => handleDeleteFavoriteId(favorite.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Нет добавленных новостей в избранное.</p>
        )}
      </div>

      <Separator className="my-8" />

      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">История просмотров</h2>
          {history.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-destructive hover:text-destructive/80"
              type="button"
              onClick={() => handleDeleteHistory()}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Очистить все
            </Button>
          )}
        </div>
        {history.length > 0 ? (
          <div className="space-y-6">
            {history.map((item) => (
              <div key={item.news.id} className="relative group">
                <NewsCard news={item.news} />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-destructive/10 text-destructive"
                  onClick={() => handleDeleteHistoryId(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
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
