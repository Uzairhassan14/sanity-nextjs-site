import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'sanity-nextjs-site',
  title: 'Sanity-NextJs-Site',

  projectId: 'yx86khcg',
  dataset: 'production',
  basePath: "/studio",
  plugins: [deskTool(), ],

  schema: {
    types: schemaTypes,
  },
})
