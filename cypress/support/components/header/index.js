import { el } from './elements'
import headerItems from '../../../fixtures/headerItems.json'

class header {

    logoShouldBeVisible() {
        cy.get(el.logo).should('be.visible')
    }

    verifyItemsLanguage(language) {

        cy.get(el.optionItem)
            .contains(headerItems.optionItem1[language])
            .should('contains.text', headerItems.optionItem1[language])
            .should('be.visible')
        cy.get(el.optionItem)
            .contains(headerItems.optionItem2[language])
            .should('contains.text', headerItems.optionItem2[language])
            .should('be.visible')
        cy.get(el.optionItem)
            .contains(headerItems.optionItem3[language])
            .should('contains.text', headerItems.optionItem3[language])
            .should('be.visible')
        cy.get(el.optionItem)
            .contains(headerItems.optionItem4[language])
            .should('contains.text', headerItems.optionItem4[language])
            .should('be.visible')

        cy.get(el.optionLangague)
            .contains(language)
            .should('be.visible')

        cy.get(el.menuItem1)
            .contains(headerItems.menuItem1[language])
            .should('contains.text', headerItems.menuItem1[language])
            .should('be.visible')
        cy.get(el.menuItem2)
            .contains(headerItems.menuItem2[language])
            .should('contains.text', headerItems.menuItem2[language])
            .should('be.visible')
        cy.get(el.menuItem3)
            .contains(headerItems.menuItem3[language])
            .should('contains.text', headerItems.menuItem3[language])
            .should('be.visible')
        cy.get(el.menuItem4)
            .contains(headerItems.menuItem4[language])
            .should('contains.text', headerItems.menuItem4[language])
            .should('be.visible')

        cy.get(el.searchField)
            .should('have.attr', 'placeholder', headerItems.searchField[language])
            .should('be.visible')
    }

    changeToLangague(language) {
        switch (language) {
            case 'en-CA':
                cy.get(el.langagueEnCA).click({ force: true })
                break;
            case 'fr-CA':
                cy.get(el.langagueFr).click({ force: true })
                break;
            default:
                cy.get(el.langagueEnUS).click({ force: true })
        }
    }

    goToLink(name) {
        cy.get(el.optionItem).contains(name).click()
    }

    searchText(text) {
        cy.get(el.searchField)
            .type(text)

        cy.get(el.searchIcon)
            .click({ force: true })

    }
}
export default new header()