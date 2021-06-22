import homeScreen from '../objects/homeScreen'
import whoAreWe from '../objects/whoAreWe'
import keyFigures from '../objects/keyFigures'
import history from '../objects/history'
import contactUs from '../objects/contactUs'
import ourOffices from '../objects/ourOffices'

export default {
    name: 'frontpage',
    type: 'document',
    title: 'Frontpage',
    fields: [
        homeScreen,
        whoAreWe,
        keyFigures,
        history,
        contactUs,
        ourOffices
    ],
    preview: {
        prepare() {
            return {
              title: "Frontpage",
            }
          }
      }

}