import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})

Then(`I see {string} in the location`, (title) => {
    cy.location().should((loc) => {
        expect(loc.host).to.eq(title)
    })
})
