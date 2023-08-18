describe('Positive Authentication Test', () => {
    it('should successfully log in with correct credentials', () => {
      cy.visit('https://login.qa.studio');
  
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
  
      cy.get('#message').should('contain', 'Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });
  describe('Password Recovery Test', () => {
    it('should initiate password recovery process', () => {
      cy.visit('https://login.qa.studio');
  
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('german@dolnikov.ru');
      cy.get('#restoreEmailButton').click();
  
      cy.get('#message').should('contain', 'Успешно отправили пароль на e-mail');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });
  describe('Negative Authentication Test (Wrong Password)', () => {
    it('should display error message for incorrect password', () => {
      cy.visit('https://login.qa.studio');
  
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('wrong_password');
      cy.get('#loginButton').click();
  
      cy.get('#message').should('contain', 'Такого логина или пароля нет');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });
  describe('Negative Authentication Test (Wrong Username)', () => {
    it('should display error message for incorrect username', () => {
      cy.visit('https://login.qa.studio');
  
      cy.get('#mail').type('wrong_username');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
  
      cy.get('#message').should('contain', 'Нужно исправить проблему валидации');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });
  describe('Validation Test (Invalid Username Format)', () => {
    it('should display error message for invalid username format', () => {
      cy.visit('https://login.qa.studio');
  
      cy.get('#mail').type('germandolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
  
      cy.get('#message').should('contain', 'Нужно исправить проблему валидации');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });
  describe('Case Sensitivity Test (Bug)', () => {
    it('should detect case-insensitive login bug', () => {
      cy.visit('https://login.qa.studio');
  
      cy.get('#mail').type('GerMan@Dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
  
      cy.get('#message').should('contain', 'Авторизация прошла успешно');
      cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });
  });
  
  
  
  