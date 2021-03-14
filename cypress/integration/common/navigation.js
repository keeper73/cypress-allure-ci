import MainPage from "../pages/main.po";
import {Given} from "cypress-cucumber-preprocessor/steps";

const mainPage = new MainPage();

Given('I open main RZD page', () => {
    mainPage.visit();
})
