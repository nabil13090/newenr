export type CityPageSection = {
  heading: string;
  paragraphs: string[];
};

export type CityPageContent = {
  title: string;
  metaDescription: string;
  h1: string;
  heroDescription: string;
  sections: CityPageSection[];
  neighborLinks: { slug: string; name: string }[];
  relatedBlogSlug: string;
};
