import { client } from './sanity'
import imageUrlBuilder from '@sanity/image-url';

export const builder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production'
});

export function urlFor(source) {
    return builder.image(source)
}