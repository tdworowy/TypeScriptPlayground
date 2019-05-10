class ScreenViewApp {
    constructor() {
        console.log(`ScreenViewApp.constructor()`)
    }
    start() {
        let collectionModel = new ItemModel (
            { Id: 0, DisplayName: 'Choose option:'}
        )
        let itemCollection = new ItemCollection(ClikableItemArray)
        let itemCollectionView = new ItemCollectionView (
            {
                model: collectionModel,
                collection: itemCollection
            }
        )
        $('#pageLayoutRegion').html (
            itemCollectionView.render().el
        )
    }
}