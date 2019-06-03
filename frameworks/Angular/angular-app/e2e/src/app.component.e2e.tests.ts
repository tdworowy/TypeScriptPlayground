import {browser} from "protractor"
import {by} from "protractor"
import {element} from "protractor"
describe("simple protractor test", () => {

    beforeEach( () => {
        browser.get('http://localhost:4200');
        browser.sleep(1000);
    });
   
   it("Should get main page  and find title", () => {
//       browser.driver.get('http://localhost:3002');
       expect(browser.driver.getTitle()).toContain("angular-app");
   }) ;

 it('Should update first elemet', () => {
     let button = by.id('select_button_0');
     expect(button).toBeDefined(); 
        element(by.id('select_button_0')).click();
        browser.sleep(1000);
        expect(element(by.id('selectedItemText')).getText()).toBe('Selected element: 1 - FirstElement');
    });

});