it('Google search', () =>{
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Automation Step by step{Enter}')
    //cy.contains('Google Search').click()
    cy.wait(2000)
    cy.contains('Videos').click()
})