/**
  const FIXTURE = {
    heading: 'Uber.com Performance',
    description: 'A year long performance audit and refactor of uber.com',
    subtext: 'performance',
    info: [
      {heading: 'Company', values: [{name: 'Uber'}]},
      {heading: 'Collaborators', values: [{name: 'Ryan Wong'}, {name: 'Wasif Zaman'}]},
      {
        heading: 'Technology',
        values: [{name: 'FusionJS'}, {name: 'ReactJS'}, {name: 'Styletron'}, {name: 'Baseweb'}, {name: 'Webpack'}, {name: 'Cloudinary'}]
      }
    ],
  };
*/
export const info = {
  name: 'info',
  title: 'Info',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [
        {name: 'person', type: 'reference', to: [{type: 'person'}]},
        {name: 'technology',  type: 'reference', to: [{type: 'technology'}]},
        {name: 'company',  type: 'reference', to: [{type: 'company'}]},
        {name: 'customField', title: 'Custom Field', type: 'customField'},
      ]
    }
  ]
}

export default {
  name: 'postHeader',
  title: 'PostHeader',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'tag'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'info',
      title: 'Info',
      type: 'array',
      of: [
        {type: 'info'}
      ]
    },
  ]
}
