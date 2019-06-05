import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";
import {ArrayView, ClickableItem} from '../app/ReactApp';

describe('tests of model ArrayView', () => {
  it('should create new instance of ArrayView', () => {
    var app = new ArrayView();
    expect(app).toBeDefined();
    expect(app.selectedItem.id).toBe(0);
    expect(app.selectedItem.displayName).toBe('none');
  });
});

describe('ArrayView tests', () => {
  let renderer: any;

  let ClickableItemArray : ClickableItem[] = [
    { id: 1, displayName : "FirstElement"},
    { id: 2, displayName : "SecondElement"},
    { id: 3, displayName : "ThirdElement"},
  ]; 

  beforeEach( () => {
    renderer = TestUtils.renderIntoDocument(
      <ArrayView items={ClickableItemArray} title="Choose option:"  />);
  });

  it('should display information about the lack of the selected element', () => {

    let domNode:Element = ReactDOM.findDOMNode(renderer) as Element;
    let selectedItem = domNode.querySelector('#selectedItem');
    expect(selectedItem.textContent).toBe('Selected element: 0 - none');

  });

  it('should find button select_button_1', () => {

    let domNode:Element = ReactDOM.findDOMNode(renderer) as Element;

    let button_1 = domNode.querySelector('#select_button_1');
    expect(button_1).toBeDefined();
    expect(button_1.innerHTML).toBe('FirstElement');

  });

  it('click event of select_button_1 should update DOM', () => {

    let domNode:Element = ReactDOM.findDOMNode(renderer) as Element;

    let button_1 = domNode.querySelector('#select_button_1');
    TestUtils.Simulate.click(button_1);
    
    let selectedItem = domNode.querySelector('#selectedItem');
    expect(selectedItem.textContent).toContain('1 - FirstElement');

  });
});