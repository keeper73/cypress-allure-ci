import MainPage from "../pages/main.po";
import {Then} from "cypress-cucumber-preprocessor/steps";

const mainPage = new MainPage();

Then("I see header have type {string}", (type) => {
    mainPage.mainHeaderTitle.should(($div) => {
        expect($div.text()).to.be.a(type)
    })
})
