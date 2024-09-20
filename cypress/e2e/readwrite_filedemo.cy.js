/// <reference types = "cypress"/>

before(() => {
    cy.fixture('example.json').as('test_data')
})

it ('Read Files using fixture', () => {

    cy.fixture('example').then((data) => {
        cy.log(data.author)
        cy.log(data.email)
    })
})

it('Read file using readFile()', () => {
    
    cy.readFile('./cypress\\fixtures\\example.json').then((data) =>{
        cy.log(data.author)
    })

})

it ('write file demo', () => {
    
    cy.writeFile('sample.txt', 'Hello I am Aman\n')
    cy.writeFile('sample.txt', 'Learning Cypress', {flag: 'a+'})
})