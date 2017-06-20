import { Bb1Page } from './app.po';

describe('bb1 App', () => {
  let page: Bb1Page;

  beforeEach(() => {
    page = new Bb1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
