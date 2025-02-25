import { createClient, type SanityClient } from 'next-sanity'

import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from './sanity.api'
import {
  indexQuery,
  type Product,
  productAndMoreStoriesQuery,
  productBySlugQuery,
  productSlugsQuery,
  type Settings,
  settingsQuery,
  categoriesQuery,
  type Category,  // Add this import
} from './sanity.queries'

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
    stega: {
      enabled: preview?.token ? true : false,
      studioUrl,
    },
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}

export const getSanityImageConfig = () => getClient()

export async function getSettings(client: SanityClient): Promise<Settings> {
  return (await client.fetch(settingsQuery)) || {}
}

export async function getAllProducts(client: SanityClient): Promise<Product[]> {
  return (await client.fetch(indexQuery)) || []
}

export async function getAllProductsSlugs(): Promise<Pick<Product, 'slug'>[]> {
  const client = getClient()
  const slugs = (await client.fetch<string[]>(productSlugsQuery)) || []
  return slugs.map((slug) => ({ slug }))
}

export async function getProductBySlug(
  client: SanityClient,
  slug: string,
): Promise<Product> {
  return (await client.fetch(productBySlugQuery, { slug })) || ({} as any)
}

export async function getProductAndMoreStories(
  client: SanityClient,
  slug: string,
): Promise<{ product: Product; moreProducts: Product[] }> {
  return await client.fetch(productAndMoreStoriesQuery, { slug })
}

export async function getAllCategories(client: SanityClient): Promise<Category[]> {
  return (await client.fetch(categoriesQuery)) || []
}
