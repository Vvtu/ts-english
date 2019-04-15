/// <reference types="Cypress" />

context('Plays first text', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});

  it('Open modal1', () => {
		// https://on.cypress.io/click
    cy.get('.cypressAdvancedIcon').click();
    cy.contains('Advanced:');
    cy.contains('hide this item');
    cy.contains('reset all info');
    cy.contains('dict #1');
    cy.contains('dict #2');
    cy.contains('set voice');
	});
});
