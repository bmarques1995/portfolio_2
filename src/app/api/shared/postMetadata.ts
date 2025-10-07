
export type Metadata = {
  title: string;
  englishTitle: string;
  publishedAt: string;
  summary: string;
  subject: string;
};

export type Post = {
    metadata: Metadata;
    slug: string;
    content: string;
};