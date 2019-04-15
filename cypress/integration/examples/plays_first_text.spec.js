/// <reference types="Cypress" />

context('Plays first text', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});
	it('Plays first text and shift to next pair', () => {
    // https://on.cypress.io/click
    // cy.get('.appcode__speaking');
    cy.get('.appcode__russian').click();
    cy.get('.appcode__english').click();
    cy.get('.appcode__speaking');
    cy.contains('(0)');
    cy.contains('1/').click();
    cy.contains('2/');
  });
});
