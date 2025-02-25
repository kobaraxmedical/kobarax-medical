import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicePage',
  title: 'Service Page',
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
  ],
});