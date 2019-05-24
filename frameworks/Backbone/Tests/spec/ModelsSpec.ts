describe("ItemModel Tests", () => {
    var itemModel: ItemModel
    beforeEach (() => {
        itemModel = new ItemModel(
            {Id:1,DisplayName: "testDisplay"}
        )
    })
    it("Item mode should be created", () => {
        expect(itemModel).toBeDefined()
    })
    it("Should get Id", () => {
        expect(itemModel.Id).toBe(1)
    })
    it("Should get DisplayName", () => {
        expect(itemModel.DisplayName).toBe("testDisplay")
    })
    it("Should set Id", () => {
        itemModel.id = -10
        expect(itemModel.id).toBe(-10)
    })
    it("Should set DisplayName", () => {
        itemModel.DisplayName = "Updated"
        expect(itemModel.DisplayName).toBe("Updated")
    })
    it("Should set Id using BackBone 'set' and get using 'get", () => {
        itemModel.set("Id", -12)
        expect(itemModel.get("Id")).toBe(-12)
    })
    it("Should set DisplayName using BackBone 'set' and get using 'get", () => {
        itemModel.set("DisplayName", "Updated2")
        expect(itemModel.get("DisplayName")).toBe("Updated2")
    })
})
describe("ItemCollectionViewModel tests", () => {
    var itemCollectionViewModel : ItemCollectionViewModel
    beforeAll( () => {
        itemCollectionViewModel = new ItemCollectionViewModel(
            { Title: "testTitle",
              SelectedItem: {Id:0, DisplayName: 'testDisplay'} }
        )
    })
    it("Should get title", () =>{
        expect(itemCollectionViewModel.Title).toBe('testDisplay')
    })
    it("Should get SelectedItem.Id", () =>{
        expect(itemCollectionViewModel.SelectedItem.Id).toBe(0)
    })
    it("Should get SelectedItem.DisplayName", () =>{
        expect(itemCollectionViewModel.SelectedItem.DisplayName).toBe("testDisplay")
    })
})
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
})