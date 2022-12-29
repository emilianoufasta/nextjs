/// <reference types="cypress" />

describe('cats', () => {
  it('frontpage can be opoenend', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Abyssinian');
    cy.contains('Welcome to Next.js!');
  })
})