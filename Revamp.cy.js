const cypress = require("cypress");

describe('e2e test saucedemo', function(){
    it('success', function(){
        
        //visit website
        cy.visit('https://www.saucedemo.com');

        //login
        cy.xpath(`//input[@data-test='username']`).type(Cypress.env('STANDARD_USERNAME'))      
        cy.xpath(`//input[@data-test='password']`).type(cypress.env('STANDARD_PASSWORD'))
        cy.xpath(`//input[@data-test='login-button']`).click();
        
        //add item to cart
        cy.xpath(`//button[@data-test='add-to-cart-sauce-labs-backpack']`).click();
        cy.xpath(`//button[@data-test='add-to-cart-sauce-labs-bike-light']`).click();
        
        //go to cart
        cy.xpath(`//a[@data-test='shopping-cart-link']`).click();

        //checkout
        cy.xpath(`//button[@data-test='checkout']`).click();

        // customer data
        cy.xpath(`//input[@data-test='firstName']`).type('fathi');
        cy.xpath(`//input[@data-test='lastName']`).type('babe');
        cy.xpath(`//input[@data-test='postalCode']`).type('1234321');
        cy.xpath(`//input[@data-test='continue']`).click();

        // finish checkout
        cy.xpath(`//button[@data-test='finish']`).click();
        
        // order complete
        cy.xpath(`//button[@data-test='back-to-products']`).click();
        cy.xpath(`//button[@id='react-burger-menu-btn']`).click();
        cy.xpath(`//a[@data-test='logout-sidebar-link']`).click();



        
    });
});