class MainPage{

    visit(){
        cy.visit('/');
    }

    clickFindButton(){
        cy.get('.rzd-go-to-result-button').click();
    }

    getFromStationTooltip(){
        return cy.get('#tooltip-station-from-empty > span');
    }

    getToStationTooltip(){
        return cy.get('#tooltip-station-to-empty > span');
    }

    getDepartureTimeTooltip(){
        return cy.get('#tooltip-date-departure-empty > span');
    }

    getReturnTimeTooltip(){
        return cy.get('#tooltip-date-return-empty > span');
    }

    getDirectionFrom(){
        return cy.get('#direction-from');
    }

    getDirectionTo(){
        return cy.get('#direction-to');
    }

    getDatepickerFrom(){
        return cy.get('#datepicker-from');
    }

    getDatepickerTo(){
        return cy.get('#datepicker-to');
    }

    setFromStation(text){
        this.getDirectionFrom().type(text);
    }

    setToStation(text){
        this.getDirectionTo().type(text);
    }

    setDatePickerTo(){
        this.getDatepickerTo().click().then(()=>{
            cy.get('.rzd-datepicker-group-middle > .rzd-datepicker-calendar > tbody > :nth-child(4) > :nth-child(5) > .rzd-state-default').click();
        });
    }

    setDatePickerFrom(){
        this.getDatepickerFrom().click().then(()=>{
            cy.get('.rzd-datepicker-group-middle > .rzd-datepicker-calendar > tbody > :nth-child(5) > :nth-child(3) > .rzd-state-default').click();
        });
    }

}

export default  MainPage;
