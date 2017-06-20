import { SweetCookPage } from './app.po';

describe('sweet-cook App', () => {
  let page: SweetCookPage;

  beforeEach(() => {
    page = new SweetCookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
