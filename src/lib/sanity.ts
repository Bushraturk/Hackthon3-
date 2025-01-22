// lib/sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Use environment variable

  // projectId: 'a50ipcsu',
  dataset: 'production', // Dataset name (usually 'production')
  apiVersion: '2023-05-03', // Use a recent date
  useCdn: true, // Set to false for fresh data
});