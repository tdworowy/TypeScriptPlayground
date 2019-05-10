class ItemCollectionView extends Backbone.View<ItemModel> {
    template: (json:any,options?:any) => string
    constructor(options?:any) {
        if(!options) {
            options = {}
        }
        super(options)
        this.template =  _.template (
            $('#itemCollectionViewTemplate').html()
        )
    }
    render() {
        this.$el.html(this.template (
            this.model.toJSON()
        ))
        this.collection.each (
            (item) => {
                var itemView: Backbone.View<ItemModel> = new ItemView (
                    { model: item }
                )
              this.$el.find('#ulRegions').append(itemView.render().el)
            }
        )
      return this
    }
}