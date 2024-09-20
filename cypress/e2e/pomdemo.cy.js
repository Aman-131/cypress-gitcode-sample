import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage();


beforeEach( () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('All Login Test', () =>{

    it(' Login with valid credentials', () => {

        loginPage.enterUsername('Admin')
        loginPage.enterUserPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()
        
    })
    
    it (' Login wiht invlaid username', () => {
        loginPage.enterUsername('Admin123')
        loginPage.enterUserPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()    
    })

})

    
it (' Login with invalid password', () => {
    loginPage.enterUsername('Admin')
    loginPage.enterUserPassword('admin456')
    loginPage.clickLogin()
    cy.get('.oxd-userdropdown-tab').click()    
})
