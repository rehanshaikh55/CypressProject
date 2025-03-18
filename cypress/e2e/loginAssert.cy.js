describe('assertion', () => {
    
    it('Implicit Assertion', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.viewport(1024, 768)
        cy.xpath("//input[@placeholder='Username']").type("Admin")
        cy.xpath("//input[@placeholder='Password']").type("admin123")
        cy.xpath("//button[normalize-space()='Login']").click()
        cy.title().should("eql","OrangeHRM")
        cy.xpath("//li//a[@href='/web/index.php/pim/viewPimModule']").click()
        cy.xpath("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click()
        cy.xpath("//span[normalize-space()='Quality Assurance']").click()
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        
    });
});