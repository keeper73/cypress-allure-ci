import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://eng.rzd.ru'
Given('I open main RZD page', () => {
    cy.visit(url)
})
