import { Link } from "react-router-dom";
import { News } from "@/types/news";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type NewsCardProps = {
  news: News;
  showDeleteButton?: boolean;
  onDelete?: (newsId: string) => void;
};

const NewsCard = ({ news, showDeleteButton = false, onDelete }: NewsCardProps) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to news detail
    if (onDelete) {
      onDelete(news.id);
    }
  };

  return (
    <Link to={`/news/${news.id}`} className="block">
      <article className="news-card mb-4 flex justify-between items-start gap-6 relative">
        <div>
          <h3 className="text-xl font-medium mb-2">{news.title}</h3>
          <p className="text-muted-foreground text-sm">
            {new Date(news.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {/* {news.tags.map(tag => (
              <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">
                {tag}
              </span>
            ))} */}
          </div>
        </div>
        
        {news.imageUrl && (
          <div className="flex-shrink-0">
            <img 
              src={news.imageUrl} 
              alt={news.title} 
              className="w-32 h-24 object-cover rounded"
            />
          </div>
        )}
        
        {showDeleteButton && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 hover:bg-destructive/20"
            onClick={handleDelete}
            aria-label="Delete from favorites"
          >
            <Trash2 className="h-5 w-5 text-destructive" />
          </Button>
        )}
      </article>
    </Link>
  );
};

export default NewsCard;