import { el } from './elements'

class searchResultsPage {

    searchShouldReturn(target) {

        cy.get(el.searchResult)
            .should('include.text', target)
    }
}

export default new searchResultsPage()