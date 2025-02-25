import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
      defineField({
        name: 'heroTitle',
        title: 'Hero Title',
        type: 'string',
    }),
      defineField({
          name: 'heroDescription',
          title: 'Hero Description',
          type: 'text',
      }),
      defineField({
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField({
      name: 'featuredProductsTitle',
      title: 'Featured Products Title',
      type: 'string'
    }),
    defineField({
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
    defineField({
        name: 'aboutSectionTitle',
        title: 'About Section Title',
        type: 'string',
    }),
      defineField({
          name: 'aboutSectionDescription',
          title: 'About Section Description',
          type: 'text',
      }),
      defineField({
        name: 'aboutSectionImage',
        title: 'About Section Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
         name: 'ctaTitle',
         title: 'CTA Title',
         type: 'string',
       }),
        defineField({
            name: 'ctaDescription',
            title: 'CTA Description',
            type: 'text',
        }),
        defineField({
            name: 'ctaButtonText',
            title: 'CTA Button Text',
            type: 'string',
        }),
        defineField({
          name: 'ctaButtonLink',
          title: 'CTA Button Link',
          type: 'string'
        })
  ],
})