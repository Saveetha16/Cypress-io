// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('OranegHRM Application', function() {

    it('Visits the OrangeHRM Page and Perform Login Action', function() {
    //Visit the OrnageHRM Website
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
   // Enter UserName and Password
    
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()
    //Verify Dashboard Tab
    cy.get(':nth-child(2) > .oxd-main-menu-item').should('have.text','PIM')
      
  })

  
  })