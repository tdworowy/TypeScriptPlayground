describe('End to end test', () => {

    beforeEach( () => {
      browser.get('http://localhost:9000');
      browser.sleep(1000);
    });
  
    it('Should load page', () => {
        expect(browser.getTitle()).toBe('Aurelia');
    });
  
    it('Should find h1 witch "Choose"', () => {
      expect(element(by.css('h1'))
        .getText()).toContain("Choose");
    });
  
    it('Should find information, that there is no Choosed element', () => {
      expect(element(by.id('selectedElement'))
        .getText()).toBe('Choose element: 0 - none');
    });
  
    it('Should find first button', () => {
      expect(element(by.id('select_button_0'))
        .getText()).toBe("firstElement");
    });
  
    it('Button click should update element', () => {
      element(by.id('select_button_0')).click();
      browser.sleep(500);
      expect(element(by.id('selectedElement'))
        .getText()).toBe('Choose element: 1 - firstElement');
    });
  
  });
  
  //https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/
  
  