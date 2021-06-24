// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import frontpage from './documents/frontpage'


// object types
import keyFigure from './objects/keyFigure'
import historyItem from './objects/historyItem'
import office from './documents/office'
import brand from './documents/brand'
import employeeInfo from './objects/employeeInfo'
import officeInfo from './objects/officeInfo'
import ourOffices from './objects/ourOffices'
import homeScreen from './objects/homeScreen'
import whoAreWe from './objects/whoAreWe'
import keyFigures from './objects/keyFigures'
import history from './objects/history'
import contactUs from './objects/contactUs'
import factory from './documents/factory'
import siteSettings from './documents/siteSettings'
import menuLink from './objects/menuLink'
import ourBrands from './objects/ourBrands'
import region from './objects/region'
import ourFactories from './objects/ourFactories'
import cta from './objects/cta'
import brandItem from './objects/brandItem'
import page from './documents/page'
import ctaLink from './objects/ctaLink'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'website',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    //navMenu,
    frontpage,
    keyFigure,
    historyItem,
    ourOffices,
    office,
    brand,
    officeInfo,
    employeeInfo,
    homeScreen,
    whoAreWe,
    history,
    keyFigures,
    contactUs,
    factory,
    siteSettings,
    menuLink,
    ourBrands,
    ourFactories,
    region,
    cta,
    brandItem,
    page,
    ctaLink
  ])
})
