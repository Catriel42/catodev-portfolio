export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl: string;
  deployUrl?: string;
  areas?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  contentUrl?: string;
  type: 'blog' | 'workshop';
  date: string;
  tags: string[];
  imageUrl: string;
}
