

describe('locator suite', () => {
    it('xPath Locator', () => {
       cy.visit('https://www.snitch.com/'); 
       cy.xpath("//div[@role='group']").should('have.length', 5);
       
    });
});