
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import TagChip from "./TagChip";

type TagListProps = {
  title: string;
  type: 'whitelist' | 'blacklist';
  tags: string[];
  onTagAdd: (tag: string) => void;
  onTagRemove: (tag: string) => void;
};

const TagList = ({ title, type, tags, onTagAdd, onTagRemove }: TagListProps) => {
  const [newTag, setNewTag] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  
  const handleAddTag = () => {
    if (newTag.trim()) {
      onTagAdd(newTag.trim());
      setNewTag("");
      setIsAdding(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTag();
    }
  };

  return (
    <div className="mb-8">
      <h3 className="section-heading">{title}</h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <TagChip 
            key={tag} 
            tag={tag} 
            type={type} 
            onRemove={() => onTagRemove(tag)} 
          />
        ))}
        
        {isAdding ? (
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter tag name"
              className="h-8 w-40"
              autoFocus
            />
            <Button 
              size="sm" 
              onClick={handleAddTag}
              variant={type === 'whitelist' ? 'default' : 'destructive'}
            >
              Add
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="tag border-dashed"
            onClick={() => setIsAdding(true)}
          >
            <Plus size={16} className="mr-1" /> Add tag
          </Button>
        )}
      </div>
    </div>
  );
};

export default TagList;
