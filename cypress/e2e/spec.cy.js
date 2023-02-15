describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:8080')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Test1', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:8080');
    cy.get('#passwordinput').clear('te');
    cy.get('#passwordinput').type('test');
    cy.get('#message').type('test');
    cy.get('#sendbutton > .glyphicon').click();
    cy.get('#pasteurl').click();
    cy.get('#passworddecrypt').clear('te');
    cy.get('#passworddecrypt').type('test');
    cy.get('#passwordform > .btn').click();
    /* ==== End Cypress Studio ==== */
  });



})

  