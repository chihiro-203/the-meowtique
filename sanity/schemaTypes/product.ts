// A product includes a product sku, product name, images, price (in USD), reviews (maybe), sale percentage, description, category, material & care, measurements, origin.

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'sku',
      type: 'string',
      title: 'Product SKU',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'price_id',
      type: 'string',
      title: 'Stripe Price ID',
    },
    {
      name: 'sale',
      type: 'number',
      title: 'Sale',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of Product',
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Product Categories',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },
    {
      name: 'material',
      type: 'text',
      title: 'Materials & Care',
    },
    {
      name: 'measurements',
      type: 'text',
      title: 'Measurements',
    },
    {
      name: 'origin',
      type: 'text',
      title: 'Origin',
    },
  ],
}
