import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "uyc4hsc7",

    dataset: "production",

    apiVersion: "2024-02-19",
  });

  return client.fetch(
    groq`*[_type == "project"]{_id, _createdAt, name, "slug": slug.current, "image": image.asset->url, url, content}`
  );
}

export async function getHomePage() {
  const client = createClient({
    projectId: "uyc4hsc7",

    dataset: "production",

    apiVersion: "2024-02-19",
  });

  return client.fetch(
    groq`*[_type == "homepage"]{_id, _createdAt, name, "slug": slug.current, "image": image.asset->url, url, headerText, bodyText, content}`
  );
}
