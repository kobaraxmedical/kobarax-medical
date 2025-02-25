import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import categoryType from './category'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'product',
  title: 'Produits',
  icon: BookIcon as any,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'proImg',
      title: 'Large Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'proImg2',
      title: 'Small Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string'
    }),
    defineField({
      name: 'delPrice',
      title: 'Del Price',
      type: 'string'
    }),
    defineField({
      name: 'stock',
      title: 'Disponible',
      type: 'string'
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string'
    }),
    defineField({
      name: 'badge1',
      title: 'Badge 1',
      type: 'string'
    }),
    defineField({
      name: 'badgeClass',
      title: 'Badge Class',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: categoryType.name }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.name',
      date: 'date',
      media: 'proImg',
    },
    prepare({ title, media, category, date }) {
      const subtitles = [
        category && `by ${category}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
