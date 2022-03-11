import { el } from './elements'

class cookieBanner {

    acceptCookiesEN() {

        cy.get(el.acceptEn)
            .should('be.visible')
            .click({ force: true })
        cy.get(el.banner)
            .should('have.css', 'display', 'none')
    }

    acceptCookiesFR(){

        cy.contains(el.acceptFr, 'Accepter les cookies')
            .should('be.visible')
            .click({ force: true })
        cy.get(el.banner)
            .should('have.css', 'display', 'none')
    }
}

export default new cookieBanner()