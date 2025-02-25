import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'termsAndConditions',
  title: 'Terms And Conditions',
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
  ],
})