describe("View tests", () => {
    var itemModel: ItemModel
    beforeEach( () => {
        setFixtures(
            `<div id= "itemViewElement"</div>
            <script type="text/template" id="itemViewTemplate">
                <button id ="itemButton"> <%=DisplayName%></button>
            </script>
            <script type="text/template" id="itemCollectionViewTemplate">
            </script>`
        )
        itemModel = new ItemModel({Id:1,DisplayName: "testName"})
    })
    it("Should generate elements li and button", () => {
        let itemView = new ItemView({model:itemModel})
        let renderedHtml = itemView.render().el
        console.log(renderedHtml.outerHTML)
        expect(renderedHtml.outerHTML).toContain("<li>")
        expect(renderedHtml.innerHTML).toContain(`<button id="itemButton">`)
        expect(renderedHtml.innerHTML).toContain("testName")
    })
    it("Should call OnClick", ()=> {
        let clickSpy = spyOn(ItemView.prototype, 'onCLicked')
        let itemView = new ItemView({model: itemModel})
        itemView.render()
        itemView.$("#itemButton").trigger("click")
        expect(clickSpy).toHaveBeenCalled()
    })
})
