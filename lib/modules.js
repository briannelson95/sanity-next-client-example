import { client } from './sanity'
import imageUrlBuilder from '@sanity/image-url';

export const builder = imageUrlBuilder({
    client
});

export function urlFor(source) {
    return builder.image(source)
}