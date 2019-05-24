class EventBus {
    static Bus = __extends({}, Backbone.Events)
}

class ItemView extends Backbone.View<ItemModel> {
    template: (json:any, options?:Backbone.ViewOptions<ItemModel>) => string
    constructor (
        options = <Backbone.ViewOptions<ItemModel> > {}
    ) {
        options.tagName = 'li'
        options.events = <any> {'click':'onClicked'}
        super(options)
        this.template = _.template(
            $('#itemViewTemplate').html()
        )
    }
    render() {
        this.$el.html (
            this.template(
                this.model.toJSON()
            )
        )
       return this 
    }
    onCLicked() {
       EventBus.Bus.trigger("item_clicked", this.model)
    }
}