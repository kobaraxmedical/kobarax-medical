'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import {
  apiVersion,
  dataset,
  DRAFT_MODE_ROUTE,
  projectId,
} from './lib/sanity.api'
import { locate } from './plugins/locate'
import { previewDocumentNode } from './plugins/previewPane'
import { settingsPlugin, settingsStructure } from './plugins/settings'
import aboutPage from './schemas/aboutPage'
import modelType from './schemas/category'
import contactPage from './schemas/contactPage'
import devisPage from './schemas/devisPage'
import favoris from './schemas/favoris'
import homePage from './schemas/homePage'
import privacyPolicyPage from './schemas/privacyPolicyPage'
import productType from './schemas/product'
import servicePage from './schemas/servicePage'
import settingsType from './schemas/settings'
import shopPage from './schemas/shopPage'
import teamMember from './schemas/teamMember'
import termsAndConditions from './schemas/termsAndConditions'
import partners from './schemas/partners'
import marquee from './schemas/marquee'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Kobarax Medical'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [settingsType, modelType, productType,
      homePage,
      aboutPage,
      shopPage,
      contactPage,
      servicePage,
      devisPage,
      favoris,
      teamMember,
      privacyPolicyPage,
      termsAndConditions,
      partners,
      marquee
    ],
  },
  plugins: [
    structureTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode(),
    }),
    presentationTool({
      locate,
      previewUrl: {
        previewMode: {
          enable: DRAFT_MODE_ROUTE,
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    process.env.NODE_ENV !== 'production' &&
      visionTool({ defaultApiVersion: apiVersion }),
  ],
})
