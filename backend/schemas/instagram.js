export default {
  name: 'instagram',
  title: 'Instagram',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string'
    },
    {
      name: 'pictureLink',
      title: 'Picture Link',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Import a Picture',
      type: 'image',
      options: { 
        hotspot: true,
      },
    },
   
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
