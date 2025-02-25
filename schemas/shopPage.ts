 import { defineField, defineType } from 'sanity'

 export default defineType({
   name: 'shopPage',
   title: 'Shop Page',
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
     defineField({
       name: 'products',
       title: 'Products',
       type: 'array',
       of: [{ type: 'reference', to: [{ type: 'product' }] }],
     }),
   ],
 })