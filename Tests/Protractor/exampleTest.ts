import { browser } from 'protractor'
describe("Example protractor test", ()=> {
    it("Should open google", async ()=> {
        await browser.driver.get("http://www.google.com")
        expect(await browser.driver.getTitle()).toContain("Google")
    })
})