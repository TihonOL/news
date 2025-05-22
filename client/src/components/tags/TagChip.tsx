
import { X } from "lucide-react";

type TagChipProps = {
  tag: string;
  type: 'whitelist' | 'blacklist';
  onRemove: () => void;
};

const TagChip = ({ tag, type, onRemove }: TagChipProps) => {
  const tagClass = type === 'whitelist' ? 'whitelist-tag' : 'blacklist-tag';
  
  return (
    <div className={`tag ${tagClass}`}>
      {tag}
      <button 
        onClick={onRemove}
        className="ml-1 rounded-full hover:bg-background/20 p-1"
        aria-label={`Remove ${tag} tag`}
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default TagChip;
