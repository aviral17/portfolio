import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // get it by either 'sanity manage' in terminal or easily from sanity.json  in sanity_ folder
  dataset: "production", // In Datasets --> under Title
  apiVersion: "2022-02-02",
  useCdn: true, // For caching, but will not render fresh data
  token: process.env.REACT_APP_SANITY_TOKEN, // Go to API --> CORS Origins --> Add CORS origin button --> http://localhost:3000 and Allow Credentials (checkbox) and save
  // After that, Add Application Token(button) --> Name: -> Application Token --> Editor --> Save
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
