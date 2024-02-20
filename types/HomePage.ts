import { PortableTextBlock } from "sanity";

export type HomePage = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  headerText: string;
  bodyText: string;
  content: PortableTextBlock[];
};
