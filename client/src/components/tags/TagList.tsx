import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import TagChip from './TagChip';
import axios from 'axios';

type TagListProps = {
  title: string;
  type: 'whitelist' | 'blacklist';
  tags: string[];
  onTagAdd: (tag: string, tagId: number) => void;
  onTagRemove: (tag: string) => void;
};

// моковые данные:
// const POPULAR_TAGS = [
//   'Политика',
//   'Экология',
//   'Наука',
//   'Международные новости',
//   'Бизнес',
//   'Здоровье',
//   'Экономика',
//   'Спорт',
//   'Технологии',
//   'Развлечения',
//   'Образование',
//   'Искусство',
// ];

const TagList = ({ title, type, tags, onTagAdd, onTagRemove }: TagListProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleAdd = (tag: string, tagId: number) => {
    if (!tags.includes(tag)) {
      onTagAdd(tag, tagId);
    }
    setShowDropdown(false);
  };

  // закрытие при клике вне дропдауна:
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('/api/categories')
      .then((res) => setCategories(res.data)) // <--- тут тот самый res.json
      .catch(console.error); // catch((error) => console.error(error))
  }, []); // <--- массив зависимостей


  return (
    <div className="mb-8">
      <h3 className="section-heading">{title}</h3>

      <div className="relative mb-2">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TagChip key={tag} tag={tag} type={type} onRemove={() => onTagRemove(tag)} />
          ))}

          <Button
            variant="outline"
            size="sm"
            className="tag border-dashed"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Plus size={16} className="mr-1" /> Добавить тег
          </Button>
        </div>

        {showDropdown && (
          <div
            ref={dropdownRef}
            className="absolute left-0 mt-2 z-10 flex flex-wrap gap-2 p-3 rounded-md border bg-neutral-900 border-neutral-700 max-w-md shadow-lg"
          >
            {categories.map((tag) => (
              <button
                key={tag.name}
                onClick={() => handleAdd(tag.name, tag.id)}
                className="px-3 py-1 text-sm rounded-full border border-neutral-600 hover:bg-yellow-600 hover:text-black transition-colors duration-150"
              >
                {tag.name}
              </button>
            ))}
            {/* <button
              onClick={() => setShowDropdown(false)}
              className="px-3 py-1 text-sm rounded-full border border-neutral-700 text-neutral-400 hover:text-white"
            >
              Отмена
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TagList;
