import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {ArrayView, ClickableItem} from './ReactApp'

let ClikableItemArray: ClickableItem[] =  [
    {id:1, displayName: "FirstElement"},
    {id:2, displayName: "SecondElement"},
    {id:3, displayName: "ThirdElement"},
  ]

ReactDOM.render(
    <ArrayView items ={ClikableItemArray}
    title="Choose option:" />,
    document.getElementById("example")
)