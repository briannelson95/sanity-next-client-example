// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import post from './documents/post'
import siteSettings from './documents/siteSettings'
import page from './documents/page'
import simpleBlockContent from './objects/simpleBlockContent'
import mainImage from './objects/mainImage'
import openGraph from './objects/openGraph'
import video from './documents/video'
import youtube from './objects/youtube'
import blockContent from './objects/blockContent'
import products from './documents/products'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    page,
    post,
    video,
    products,

    simpleBlockContent,
    blockContent,
    mainImage,
    openGraph,
    youtube,
  ]),
})
