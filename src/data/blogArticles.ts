export interface BlogArticle {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  relatedTo: string;
  content: { heading?: string; text: string }[];
}

const articles: BlogArticle[] = [];

export default articles;
