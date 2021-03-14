class MainPage{

    visit(){
        cy.visit('/');
    }

    get fromStationTooltip(){
        return cy.get('#tooltip-station-from-empty > span');
    }

    get toStationTooltip(){
        return cy.get('#tooltip-station-to-empty > span');
    }

    get departureTimeTooltip(){
        return cy.get('#tooltip-date-departure-empty > span');
    }

    get directionFrom(){
        return cy.get('#direction-from');
    }

    get directionTo(){
        return cy.get('#direction-to');
    }

    get datepickerFrom(){
        return cy.get('#datepicker-from');
    }

    get datepickerTo(){
        return cy.get('#datepicker-to');
    }

    get findButton(){
        return cy.get('.rzd-go-to-result-button');
    }

    get mainHeaderTitle(){
        return  cy.get('.unfolding-block__header')
    }

    setFromStation(text){
        this.directionFrom.type(text);
    }

    setToStation(text){
        this.directionTo.type(text);
    }

    clickMiddleDatePickerGroup(x,y){
        cy.get('.rzd-datepicker-group-middle > .rzd-datepicker-calendar > tbody > :nth-child('+x+') > :nth-child('+y+') > .rzd-state-default').click();
    }

    setDatePickerTo(){
        this.datepickerTo.click().then(()=>{
            this.clickMiddleDatePickerGroup(4,5);
        });
    }

    setDatePickerFrom(){
        this.datepickerFrom.click().then(()=>{
            this.clickMiddleDatePickerGroup(5,3);
        });
    }
    clickFindButton(){
        this.findButton.click();
    }
}

export default  MainPage;
