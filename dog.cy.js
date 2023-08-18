describe('HuntingPony Test', () => {
  it('should open the main page', () => {
    cy.visit('https://huntingpony.com');
    cy.get('[data-index="2"] > .header__collections-controls > .header__collections-link').click();
    cy.get('[data-product-id="378247921"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
    cy.wait(5000)
    cy.get('.add-cart-counter__btn-label').click();
    cy.get('[data-add-cart-counter-plus=""]').click();
    cy.get('.add-cart-counter__detail-dop-text').click();
    cy.get('.cart-controls > .button').contains('Оформить заказ'); 
  });
});