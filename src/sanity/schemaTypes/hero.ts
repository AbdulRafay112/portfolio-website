export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'intro', title: 'Intro', type: 'text' },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true }
    },
  ]
}
