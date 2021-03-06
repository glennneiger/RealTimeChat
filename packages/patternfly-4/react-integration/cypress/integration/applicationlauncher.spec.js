describe('Application Launcher Demo Test', function () {
    it('Navigate to demo section', function () {
        cy.visit('http://localhost:3000/');
        cy.get('#application-launcher-demo-nav-item-link').click();
        cy.url().should('eq', 'http://localhost:3000/application-launcher-demo-nav-link');
    });
    it('Verify application launcher button', function () {
        cy.get('button').should('have.class', 'pf-c-button pf-m-plain');
    });
    it('Verify app launcher menu toggle', function () {
        cy.get('#pf-random-id-0').click();
        cy.get('ul').should('have.class', 'pf-c-app-launcher__menu');
        cy.get('#pf-random-id-0').click();
        cy.get('.pf-c-app-launcher__menu').should('not.exist');
    });
    it('Verify application click works', function () {
        cy.get('#pf-random-id-0').click();
        cy.get('.pf-c-app-launcher__menu-item').first().click();
        cy.url().should('eq', 'http://patternfly-react.surge.sh/');
    });
});
