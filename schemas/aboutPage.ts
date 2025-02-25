// schemas/aboutPage.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
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
        name: 'teamTitle',
        title: 'Team Title',
        type: 'string'
      }),
       defineField({
        name: 'team',
        title: 'Team Members',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
      }),
    ],
});