 import { defineField, defineType } from 'sanity'

 export default defineType({
   name: 'contactPage',
   title: 'Contact Page',
   type: 'document',
   fields: [
     defineField({
       name: 'title',
       title: 'Title',
       type: 'string',
        validation: (rule) => rule.required(),
     }),
     defineField({
       name: 'contactText',
       title: 'Contact Text',
       type: 'text',
     }),
     defineField({
       name: 'email',
       title: 'Email Address',
       type: 'string',
     }),
      defineField({
           name: 'phoneNumber',
           title: 'Phone Number',
           type: 'string',
       }),
       defineField({
           name: 'address',
           title: 'Address',
           type: 'text',
       }),
        defineField({
       name: 'mapEmbed',
       title: 'Map Embed Code',
       type: 'text',
       }),
       defineField({
           name: 'contactFormTitle',
           title: 'Contact Form Title',
           type: 'string',
       }),
   ],
 })