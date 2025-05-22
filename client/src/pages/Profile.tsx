
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { mockUser, mockNews } from "@/data/mockData";
import NewsCard from "@/components/news/NewsCard";

const Profile = () => {
  const userFavorites = mockNews.filter(news => mockUser.favorites.includes(news.id));
  const userHistory = mockNews.filter(news => mockUser.history.includes(news.id));

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
          <AvatarFallback>{mockUser.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{mockUser.name}</h1>
          <p className="text-muted-foreground">{mockUser.email}</p>
        </div>
      </div>
      
      <Separator className="my-8" />
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Favorite News</h2>
        {userFavorites.length > 0 ? (
          <div className="space-y-6">
            {userFavorites.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">You haven't added any favorites yet.</p>
        )}
      </div>
      
      <Separator className="my-8" />
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Browsing History</h2>
        {userHistory.length > 0 ? (
          <div className="space-y-6">
            {userHistory.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">Your browsing history is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
