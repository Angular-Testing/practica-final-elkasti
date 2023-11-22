import { LAUNCHS, LAUNCHS_FAVORITES } from '../../test/assets/launchs';

describe('DADO un usuario que entra en un lanzamiento', () => {
  let lanzamiento = '';
  beforeEach(() => {
    cy.intercept('GET', Cypress.env('apiUrl') + 'launch/upcoming/?limit=10&mode=list', {
      body: LAUNCHS,
    });
    cy.intercept('GET', Cypress.env('apiUrl') + 'launch/?slug=' + LAUNCHS.results[0].slug, {
      body: LAUNCHS_FAVORITES,
    });
  });

  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href*="launch"]:first')
      .then($value => {
        lanzamiento = $value.text();
      })
      .as('launch');
    cy.get('@launch').click();
  });

  context('CUANDO pulsa en agregar a favoritos', () => {
    beforeEach(() => {
      cy.get('[data-testid="buttonAddToFavorites"]').click();
    });
    it('ENTONCES se añade a la página de favoritos', () => {
      cy.visit('/favorites');
      cy.get('a[href*="launch"]').should('contain', lanzamiento);
    });
  });
});
