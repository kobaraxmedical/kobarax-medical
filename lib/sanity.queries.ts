import groq from 'groq'

const productFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  proImg,
  proImg2,
  "slug": slug.current,
  "category": category->{name, picture, icon},
  description,
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "product"] | order(date desc, _updatedAt desc) {
  ${productFields}
}`

export const productAndMoreStoriesQuery = groq`
{
  "product": *[_type == "product" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${productFields}
  },
  "moreProducts": *[_type == "product" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${productFields}
  }
}`

export const productSlugsQuery = groq`
*[_type == "product" && defined(slug.current)][].slug.current
`

export const productBySlugQuery = groq`
*[_type == "product" && slug.current == $slug][0] {
  ${productFields}
}
`

export const categoriesQuery = groq`
*[_type == "category"] {
  name,
  picture,
  icon
}
`

export interface Category {
  name?: string
  picture?: any
  icon?: string
}

export interface Product {
  _id: string
  title?: string
  proImg?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  category?: Category
  slug?: string
  content?: any
  price?: string
  delPrice?: string
  stock?: string
  size?: string
  brand?: string
  badge1?: string
  badgeClass?: string
  description?: string
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
