import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import about from './about'
import project from './projects'
import contact from './contact'
import social from './social'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero , about , project , contact , social],
}
