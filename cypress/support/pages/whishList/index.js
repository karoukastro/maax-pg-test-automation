import { el } from './elements'

class whishListPage {

    shouldHaveTitle() {

        cy.get(el.title)
            .contains('Wish List')
            .should('be.visible')
    }
}

export default new whishListPage()