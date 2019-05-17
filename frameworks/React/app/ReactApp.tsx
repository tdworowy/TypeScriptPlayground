import * as React from 'react';
export class ClicableItem {
    displayName: string = ""
    id: number = 0
}
export class ClickItemView extends React.Component<ClicableItem,{}> {
    constructor() {
        super(new ClicableItem())
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <li><button onClick={this.handleClick}>{this.props.displayName}</button></li>
        )
    }
    handleClick() {
        alert(`handleClick(){id: ${this.props.id}} displayName: ${this.props.displayName}`)
    }
}
export interface IArrayViewProps {
    title: string
    items: ClicableItem[]
}
export class ArrayView extends React.Component <IArrayViewProps, {}> {
    render() {
        let buttonNodes = 
            this.props.items.map (function(item) {
                return (
                    <ClickItemView {...item}/>
                )
            })
        return <div>
            <h1>{this.props.title}</h1>
            <ul>{buttonNodes}</ul>
            </div>
    }
}