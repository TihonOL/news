
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TagList from "@/components/tags/TagList";
import { popularCategories } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";

const Home = () => {
  const { toast } = useToast();
  const [whitelistTags, setWhitelistTags] = useState<string[]>(["Ecology", "Technology"]);
  const [blacklistTags, setBlacklistTags] = useState<string[]>(["Gossip"]);

  const handleAddWhitelistTag = (tag: string) => {
    if (!whitelistTags.includes(tag)) {
      setWhitelistTags([...whitelistTags, tag]);
      toast({
        title: "Tag added",
        description: `"${tag}" added to your reading preferences.`
      });
    }
  };

  const handleRemoveWhitelistTag = (tag: string) => {
    setWhitelistTags(whitelistTags.filter(t => t !== tag));
  };

  const handleAddBlacklistTag = (tag: string) => {
    if (!blacklistTags.includes(tag)) {
      setBlacklistTags([...blacklistTags, tag]);
      toast({
        title: "Tag blocked",
        description: `"${tag}" added to your blocked topics.`
      });
    }
  };

  const handleRemoveBlacklistTag = (tag: string) => {
    setBlacklistTags(blacklistTags.filter(t => t !== tag));
  };

  const handleCategoryClick = (category: string) => {
    if (!whitelistTags.includes(category)) {
      handleAddWhitelistTag(category);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">News Filtering</h1>
      <p className="text-muted-foreground mb-8">Add tags to refine your news feed</p>

      <TagList 
        title="Want to read"
        type="whitelist"
        tags={whitelistTags}
        onTagAdd={handleAddWhitelistTag}
        onTagRemove={handleRemoveWhitelistTag}
      />

      <TagList 
        title="Don't want to read"
        type="blacklist"
        tags={blacklistTags}
        onTagAdd={handleAddBlacklistTag}
        onTagRemove={handleRemoveBlacklistTag}
      />

      <Separator className="my-8" />

      <div className="mb-8">
        <h3 className="section-heading mb-4">Popular categories</h3>
        <div className="flex flex-wrap gap-2">
          {popularCategories.map(category => (
            <Button 
              key={category} 
              variant="outline" 
              size="sm"
              className="tag"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
