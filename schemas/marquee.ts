import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'marquee',
  title: 'Marquee',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
       validation: (rule) => rule.required(),
    })
  ],
})