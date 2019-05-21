class ModifyDomElement {
    setHtml() {
        let ele = $('#my_div')
        ele.html('<p>Hello World!</p>')
    }
}
describe("Test function setFixture",()=> {
    it("Should modify DOM", ()=> {
        setFixtures("<div id='my_div'></div>")
        let modifyDom = new ModifyDomElement()
        modifyDom.setHtml()
        let modifyDomElement = $('#my_div')
        expect(modifyDomElement.length).toBeGreaterThan(0)
        expect(modifyDomElement.html()).toContain("Hello World!") 
    })
})