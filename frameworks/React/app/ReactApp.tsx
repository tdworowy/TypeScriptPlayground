import * as React from 'react';
export class ClickableItem {
    displayName: string = ""
    id: number = 0
}
export class ClickItemView extends React.Component<ClickableItem,{}> {
    constructor() {
        super(new ClickableItem())
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
    items: ClickableItem[]
    selectedItem?: ClickableItem
}
export class ArrayView extends React.Component <IArrayViewProps, {}> {
    selectedItem: ClickableItem
    constructor(props?:any) {
        super(props)
        this.selectedItem = {id:0, displayName: 'none'}
    }

    handleClick(i : number, props: any): any {
        //console.log(`handleClick : ${props}`);
        this.selectedItem = props;
        this.forceUpdate();
      } 
      
    render() {

        return ( <div>
          <h1>{this.props.title}</h1>
          <ul>
            {this.props.items.map( (item,i) =>{
              return (
                <li key={i} onClick={this.handleClick.bind(this, i, item)}>
                  <button id={'select_button_' + item.id} >                 
                  {item.displayName}</button>
                </li>
              );
            }, this)}
          </ul>
      
          <div id="selectedItem">Selected element: 
            {this.selectedItem.id} - {this.selectedItem.displayName}
          </div>
          </div>
        );
      }
      
}