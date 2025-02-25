// schemas/privacyPolicyPage.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'privacyPolicyPage',
  title: 'Privacy Policy Page',
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