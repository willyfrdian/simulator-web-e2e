import checkoutpage, * as x from '../../support/page_objects/checkoutpage';
const web = Cypress.env('ALPHA_BASE_URL')

describe('buy midtrans', () => {

  beforeEach(function() {
    // cy.checkURL(web);
  })

  it('should success when checkout midtrans with credit card payment', () => {
    // cy.visit(`${webUrl}`);
    cy.visit('https://demo.midtrans.com/');
    cy.contains('BUY NOW').click()
    cy.get('div').contains('Shopping Cart').should('be.visible')
    cy.wait(2000)
    cy.get(x.midtransdemo.total).clear().type('2')
    cy.get(x.midtransdemo.name).clear().type('Ferdi')
    cy.get(x.midtransdemo.email).clear().type('cekpointesting@gmail.com')
    cy.get(x.midtransdemo.phonenumber).clear().type('08119411114')
    cy.get(x.midtransdemo.city).clear().type('Tangerang')
    cy.get(x.midtransdemo.area).clear().type('cipondoh')
    cy.get(x.midtransdemo.portalcode).clear().type('15141')
    cy.get(x.midtransdemo.buttoncheckout).click()

    //#snap-midtrans sudah diluar jangkauan tidak bisa di click payment method nya

    cy.intercept('/users/**')
    cy.intercept('GET', '/users*')
    cy.intercept({
    method: 'GET',
    url: '/users*',
    hostname: 'localhost',
    })
  })
})