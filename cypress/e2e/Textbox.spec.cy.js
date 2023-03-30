/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // prevent Cypress from failing the test
    return false
  })
  

context ('Texbox Test', () => {
    it ('Test Case 1: Positive Text Test', () =>{
        cy.visit ('https://demoqa.com/text-box');
        cy.get('#userName').type('Dionna Lorayna');
        cy.get('#userEmail').type('dio@gmail.com');
        cy.get('#currentAddress').type('Zone 1, Baldoza, Lapaz, Iloilo City');
        cy.get('#permanentAddress').type('Tabugon, Kabankalan City, Negros Occidental');
        cy.get('#submit').click();
    });
      
});