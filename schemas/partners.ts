import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
       validation: (rule) => rule.required(),
    }),
      defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [
              { type: 'block' },
          ],
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
  ],
})