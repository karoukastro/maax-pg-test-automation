import { el } from './elements'

class contactUsPage {

    shouldHaveTitle() {

        cy.get(el.title)
            .contains('Contact Us')
            .should('be.visible')
    }
}

export default new contactUsPage()