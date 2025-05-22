import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

  return (
    <Link to={`/news/${news.id}`} className="block">
      <article className="news-card mb-4 flex justify-between items-start gap-6">
        <div>
          <h3 className="text-xl font-medium mb-2">{news.title}</h3>
          <p className="text-muted-foreground text-sm">
            {/* {new Date(news.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })} */}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {news.tags?.map((tag) => (
              <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {news.imageURL && (
          <div className="flex-shrink-0">
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-32 h-24 object-cover rounded"
            />
          </div>
        )}
      </article>
    </Link>
  );
};

export default NewsCard;
