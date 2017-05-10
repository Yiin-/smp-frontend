import { SmpFrontendPage } from './app.po';

describe('smp-frontend App', () => {
  let page: SmpFrontendPage;

  beforeEach(() => {
    page = new SmpFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
