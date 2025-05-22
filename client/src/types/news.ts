
export interface News {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  imageUrl?: string;
  tags: string[];
  sources: Source[];
  bias: {
    left: number;
    center: number;
    right: number;
  };
}

export interface Source {
  name: string;
  url: string;
  bias: 'left' | 'center' | 'right';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  favorites: string[];
  history: string[];
  tags: {
    whitelist: string[];
    blacklist: string[];
  };
}
