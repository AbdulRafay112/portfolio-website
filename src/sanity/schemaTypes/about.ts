export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'experienceYears', title: 'Years of Experience', type: 'number' },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true }
    },
  ]
}
