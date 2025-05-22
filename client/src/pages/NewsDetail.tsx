
import { useParams, Link } from "react-router-dom";
import { mockNews } from "@/data/mockData";
import BiasBar from "@/components/news/BiasBar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const news = mockNews.find(n => n.id === id);

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

  return (
    <div>
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/news">
          <ArrowLeft size={16} className="mr-2" />
          Back to News
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      
      <p className="text-muted-foreground mb-6">
        {new Date(news.date).toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        })}
      </p>
      
      {news.imageUrl && (
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      
      <p className="text-lg mb-8">{news.summary}</p>
      
      <Separator className="my-8" />
      
      <div className="mb-8">
        <h3 className="section-heading">Source Links</h3>
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
              <span className="text-xs text-muted-foreground">
                ({source.bias})
              </span>
            </li>
          ))}
        </ul>
      </div>
      
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
                .filter(s => s.bias === 'left')
                .map((s, i) => (
                  <li key={i}>{s.name}</li>
                ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Center</h4>
            <ul className="text-sm">
              {news.sources
                .filter(s => s.bias === 'center')
                .map((s, i) => (
                  <li key={i}>{s.name}</li>
                ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Right</h4>
            <ul className="text-sm">
              {news.sources
                .filter(s => s.bias === 'right')
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
