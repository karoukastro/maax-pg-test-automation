import { el } from './elements'

class whereToBuyPage {

    shouldHaveTitle() {

        cy.get(el.title)
            .contains('Where to Buy')
            .should('be.visible')
    }
}

export default new whereToBuyPage()