import imageUrlBuilder from '@sanity/image-url'
import {createClient} from '@sanity/client';

const client = createClient({
  projectId: '6wj7dtak',
  dataset: 'production',
  useCdn: true,
  apiVersion:'v2022-03-07'
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client;
