import { App } from 'app';
import {StageComponent} from "aurelia-testing"
import {bootstrap} from "aurelia-bootstrapper"

describe('Stage App Component', () => {
  var application: App
  beforeAll(function () {
    application = new App()
  })
  it("Message properties contains word 'Choose'",  () => {
    expect(application.message).toContain("Choose")
  })
  it("Properties items exist", function () {
    expect(application.items).toBeDefined()
  })
  it("items array have correct length", function () {
    expect(application.items.length).toBe(3)
  })
  it("currentElement was set", function () {
    expect(application.currentElement).toBeDefined()
  })
  it("currentElement.idValue is 0", function () {
    expect(application.currentElement.idValue).toBe(0)
  })
  it("currentElement.displayName is 'none'", function () {
    expect(application.currentElement.displayName).toBe('none')
  })
})
describe("Application display tests", () =>{
  var application
  beforeEach(()=> {
    application = StageComponent
      .withResources('app')
      .inView(
        '<require from="./ClickableItem"></require>'+
        '<h1 id="messageHeader">${message}</h1>'+
        '<ul id="ulItemList">'+
        '<li repeat.for="item of items" click.delegate="onItemClicked(item)">'+
        '<button>'+
         '${item.displayName}'+
        '</button>'+
        '</li>'+
        '</ul>'+
        '<Clickable-item'+
        'id-value="${currentElement.idValue}"'+
        'display-name="${currentElement.displayName}">'+
        '</Clickable-item>'
      )
      .boundTo(new App())
  })
  it("Should display message value", (done)=> {
    application.create(bootstrap).then( () => {
      var messageHeader = document.querySelector('#messageHeader')
      expect(messageHeader).toBeDefined()
      expect(messageHeader.innerHTML).toContain('Choose')
      done()
    })
  })
  it("Should display buttons", (done) => {
    application.create(bootstrap).then(() => {
      var ulItemList = document.querySelectorAll(
        '#ulItemList>li>button')
        expect(ulItemList).toBeDefined()
        
        for(var i =0; i<ulItemList.length;i++) {
          var itemElement = ulItemList[i]
          expect(itemElement.innerHTML).toContain('Element')
        }
        done()
    })
  })
}) 