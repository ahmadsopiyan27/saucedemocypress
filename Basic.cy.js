describe('e2e test saucedemo', function(){
    it('success', function(){
        //visit website
        cy.visit('https://www.saucedemo.com');

        //login
        cy.xpath(`//input[@data-test='username']`).type('visual_user');
        cy.xpath(`//input[@data-test='password']`).type('secret_sauce');
        cy.xpath(`//input[@data-test='login-button']`).click();
        
        //add item to cart
        cy.xpath(`//button[@data-test='add-to-cart-sauce-labs-backpack']`).click();
        cy.xpath(`//button[@data-test='add-to-cart-sauce-labs-bike-light']`).click();
        
        //go to cart
        cy.xpath(`//a[@data-test='shopping-cart-link']`).click();

        //checkout
        cy.xpath(`//button[@data-test='checkout']`).click();

        // customer data
        cy.xpath(`//input[@data-test='firstName']`).type('first');
        cy.xpath(`//input[@data-test='lastName']`).type('name alisa');
        cy.xpath(`//input[@data-test='postalCode']`).type('1234321');
        cy.xpath(`//input[@data-test='continue']`).click();

        // finish checkout
        cy.xpath(`//button[@data-test='finish']`).click();
        
        // order complete
        cy.xpath(`//button[@data-test='back-to-products']`).click();


        
    });
});