import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'favorisPage',
  title: 'Favoris Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
       validation: (rule) => rule.required(),
    }),
     defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
      }),
  ],
})