import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create a URL builder instance
const builder = imageUrlBuilder(client);

/**
 * Generate image URL from Sanity image reference
 * @param source - The image asset object from Sanity (e.g., { asset: { _ref: "image-..." } })
 * @returns A URL builder instance for the image
 */
export const urlFor = (source: SanityImageSource) => builder.image(source);

// If you still need to keep the generateImageUrl function, here's the update:

/**
 * Generate image URL from Sanity CDN
 * @param ref - The image reference from Sanity (e.g., "image-80e6970e1cb65fc13727367d2aa394dd01a097e4-124x124-png")
 * @param projectId - Your Sanity project ID
 * @param dataset - Your Sanity dataset (default: "production")
 * @returns The complete image URL
 */
export const generateImageUrl = (
    ref: string,
    projectId: string,
    dataset: string = 'production'
): string => {
    // Replace the image reference format to generate the URL
    const imagePath = ref
        .replace('image-', '') // Remove "image-" prefix
        .replace('-png', '.png'); // Replace "-png" with ".png"

    // Construct the full URL
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imagePath}`;
};
