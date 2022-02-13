import Amazon from '../pageObjects/amzPage'
import { recurse } from 'cypress-recurse'

describe('Selecting Item Module', function () {

    const amazon = new Amazon()

    it('Verify user can navigate to launch the url', function () {

        cy.visit('/')

        amazon.homepageAllSideMenu().should('be.visible');
        amazon.homepageAmazonIcon().should('be.visible');
        amazon.homepageSignIn().should('be.visible').and('have.text', 'Hello, Sign in');

    })

    it('Verify user can search for shoes', function () {

       amazon.searchBox().should('be.visible').type('shoes');
       amazon.searchButton().click();

    })

    it('Verify searched shoe page loads successfully', function () {

         //to check url changes to search for shoes
       cy.url().should('include', 'shoes');
       amazon.resultReturned().should('have.text','"shoes"')
       //check that shoe is displayed
       amazon.verifyShoeReturned().should('be.visible')
       .and('have.text', "TOMS Women's Seasonal Classic Alpargata")
       
    })

    it("Verify user can select a shoe", function () {

        amazon.selectShoeReturned().should('be.visible')
        .and('have.text', "Amazon Essentials Women's Loafer Flat").click();
      
    })

    it("Verify shoe selected is displayed", function () {

        amazon.selectedProductTitle().should('be.visible')
        .and('contain.text', "Amazon Essentials Women's Loafer Flat");
        amazon.productRating().should('be.visible');
        amazon.productImage().should('be.visible');
        amazon.returnedPrice().should('be.visible');
        cy.wait(3000)

    })


})