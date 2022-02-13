class Amazon
{

   homepageAmazonIcon()
   {
      return cy.get('#nav-global-location-slot > #nav-global-location-data-modal-action > #nav-global-location-popover-link > #glow-ingress-block > #glow-ingress-line2')
   }
   
   homepageAllSideMenu()
   {
      return cy.get('#nav-hamburger-menu')
   }
  
   homepageSignIn()
   {
      return cy.get('#nav-link-accountList-nav-line-1')
   }

   searchBox()
   {
      return cy.get('#nav-search > #nav-search-bar-form > .nav-fill > .nav-search-field > #twotabsearchtextbox')
   }

   searchButton()
   {
      return cy.get('#nav-search-submit-button')
   }

   resultReturned()
   {
      return cy.get('.a-color-state')
   }

    verifyShoeReturned()
   {
      return cy.get('[data-asin="B00K369NJA"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
   }


   selectShoeReturned()
   {
      return cy.get('[data-asin="B088KBYM9G"] > .sg-col-inner > .s-widget-container > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
   }

   selectedProductTitle()
   {
      return cy.get('#productTitle')
   }

   productRating()
   {
      return cy.get('#averageCustomerReviews > [data-action="acrStarsLink-click-metrics"] > #acrPopover > span.a-declarative > .a-popover-trigger > .a-icon-star')
   }

   productImage()
   {
      return cy.get('#landingImage')
   }

   returnedPrice()
   {
      return cy.get('tr > .a-span12')
   }

   
   
  
  
   
   

}

export default Amazon;
