export default {
  name: 'highlightVertical',
  title: 'Highlight Vertical',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'imageCols',
      title: 'Image Columns',
      type: 'number',
      validation: Rule => Rule.required().integer().min(1).max(9),
    },
    {
      name: 'isImageRight',
      title: 'Is Image Right?',
      type: 'boolean',
    }
  ]
}
