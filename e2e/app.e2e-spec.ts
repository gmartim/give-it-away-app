import { GiveItAwayAppPage } from './app.po';

describe('give-it-away-app App', () => {
  let page: GiveItAwayAppPage;

  beforeEach(() => {
    page = new GiveItAwayAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
