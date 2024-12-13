import { createClient } from "next-sanity";
import imageUrBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "szm5z58d",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

const builder = imageUrBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
