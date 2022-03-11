import cookieBanner from '../support/components/cookieBanner'
import header from '../support/components/header'
import whereToBuyPage from '../support/pages/whereToBuy'
import whishListPage from '../support/pages/whishList'
import contactUsPage from '../support/pages/contactUs'
import searchResultsPage from '../support/pages/searchResults'

describe("Test Header", () => {

    beforeEach(function () {
        cy.visit("/")
        cookieBanner.acceptCookiesEN()
    })

    context("Language Validation", () => {

        it("Items should be visible in American English by Default", () => {
            header.logoShouldBeVisible()
            header.verifyItemsLanguage('en');
        })

        it("Select Canadian English as language and check header language", () => {
            header.changeToLangague('en-CA')
            cookieBanner.acceptCookiesEN()
            header.verifyItemsLanguage('en');
        })

        it("Select French as language and check header language", () => {
            header.changeToLangague('fr-CA')
            cookieBanner.acceptCookiesFR()
            header.verifyItemsLanguage('fr-CA');
        })

        it("Select American English as language and check header language", () => {
            header.changeToLangague('fr-CA')
            cookieBanner.acceptCookiesFR()
            header.changeToLangague('en')
            header.verifyItemsLanguage('en');
        })
    })

    context("Link Validation", () => {

        it("Where To Buy link", () => {
            header.goToLink('Where To Buy')
            whereToBuyPage.shouldHaveTitle()
        })

        it("Wish List link", () => {
            header.goToLink('Wish List')
            whishListPage.shouldHaveTitle()
        })

        it("Contact Us link", () => {
            header.goToLink('Contact Us')
            contactUsPage.shouldHaveTitle()
        })
    })

    context("Search Validation", () => {

        it("Search a text", () => {
            const target = 'Testing Search'
            header.searchText(target)
            searchResultsPage.searchShouldReturn(target)
        })
    })

})