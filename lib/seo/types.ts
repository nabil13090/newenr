export type City = {
  name: string;
  slug: string;
  departmentCode: string;
  departmentSlug: string;
  departmentName: string;
  postalCode: string;
  localHook: string;
  relatedBlogSlug: string;
  neighborSlugs: string[];
  neighborNames: string[];
};

export type Department = {
  slug: string;
  name: string;
  code: string;
  description: string;
  relatedBlogSlug: string;
  sections: { heading: string; paragraphs: string[] }[];
};
