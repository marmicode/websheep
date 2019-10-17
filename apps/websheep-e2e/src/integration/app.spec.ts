import { getGreeting } from '../support/app.po';

describe('websheep', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to websheep!');
  });
});
