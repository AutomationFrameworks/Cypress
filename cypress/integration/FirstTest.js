/// <reference  types="Cypress" />

context("Window", () => {
    beforeEach(() => {
        cy.visit("https://scrolltest.com");
        cy.wait(2000);
    })

    it('Open in mac 15', () => {
        cy.screenshot()
        cy.wait(200)
    });

});