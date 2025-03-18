describe('wikipedia search dynamic select', () => {
    it('searching valorant', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.xpath("//input[@id='searchInput']").type("Valorant")
        cy.get(".suggestion-title").contains("Valorant").click()
    });
});