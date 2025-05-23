import { Link } from 'react-router-dom';

import { News } from '@/types/news';

type NewsCardProps = {
  news: News;
};

const NewsCard = ({ news }: NewsCardProps) => {
  // console.log(news);
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
    <Link to={`/news/${news.id}`} className="block">
      <article className="news-card mb-4 flex justify-between items-start gap-6">
        <div>
          <h3 className="text-xl font-medium mb-2">{news.title}</h3>
          <p className="text-muted-foreground text-sm">{formattedDate}</p>
          <p className="text-muted-foreground text-sm">

            {formattedDate}
          </p>
          <p className="text-muted-foreground text-sm">

            Категория: {news.categories.map((el) => el.name).join(' ')}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {/* {news.tags.map((tag) => (

              <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded">
                {tag}
              </span>
            ))} */}
            {`${news.text?.slice(0, 50)}...`}
          </div>
        </div>

        {news.imageURL && (
          <div className="flex-shrink-0">
            <img
              src={news.imageURL}
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
