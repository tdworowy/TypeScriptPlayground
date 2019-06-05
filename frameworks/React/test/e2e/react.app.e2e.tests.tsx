import {browser} from "protractor"
import {by} from "protractor"
import {element} from "protractor"
import {expect} from "chai"
describe("simple protractor test", () => {

    beforeEach( () => {
        browser.ignoreSynchronization = true;
        browser.get('http://localhost:8080/index.html');
        browser.sleep(1000);
    });
   
   it("should open main", () => {
//       browser.driver.get('http://localhost:3002');
       expect(browser.driver.getTitle()).contain("Witaj, React!");
   }) ;

 it('clicking the button should update the selected element', () => {
     let button = by.id('select_button_1');
     expect(button).exist; 
        element(by.id('select_button_1')).click();
        browser.sleep(1000);
        expect(element(by.id('selectedItem')).getText()).equal('Selected element: 1 - FirstElement');
    });

});