import MainPage from "../pages/main.po";
import {Given} from "cypress-cucumber-preprocessor/steps";

const mainPage = new MainPage();

Given('I open main RZD page', () => {
    mainPage.visit();
})


When('I click find button', () => {
    mainPage.clickFindButton();
})

When('I feel {string} in from station', (text) => {
    mainPage.setFromStation(text);
})

When('I feel {string} in to station', (text) => {
    mainPage.setToStation(text);
})

When('I feel toDatePicker', () => {
    mainPage.setDatePickerTo();
})

When('I feel fromDatePicker', () => {
    mainPage.setDatePickerFrom();
})


Then("I see {string} in the from tooltip", (text) => {
    mainPage.fromStationTooltip.should('be.visible').should('have.text', text);
})

Then("I see {string} in the to tooltip", (text) => {
    mainPage.toStationTooltip.should('be.visible').should('have.text', text);
})

Then("I see {string} in the departure time tooltip", (text) => {
    mainPage.departureTimeTooltip.should('be.visible').should('have.text', text);
})
