
interface IFrontend {
    isAlive(cellId:number): boolean
    kill(cellId:number): void
    revive(cellId:number): void
}
  
interface IGameOfLive {
    startGame(initialCellsCount:number): void
    checkRules():void
    play():void
}
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
class GameOfLive implements IGameOfLive{

    private frontEnd: IFrontend
    private rowsCount: number
    private itemsCount: number
    
    constructor(frontEnd: IFrontend, rowsCount:number) {
        this.frontEnd = frontEnd
        this.rowsCount = rowsCount
        this.itemsCount = this.rowsCount * this.rowsCount 
    }
    private getNigbursIndexes (cellID: number): number[] {
        return [ cellID - 1,
                 cellID + 1,
                 cellID +  this.rowsCount,
                 cellID +  this.rowsCount,
                 cellID -  this.rowsCount,
                 cellID -  this.rowsCount - 1,
                 cellID -  this.rowsCount + 1,
                 cellID +  this.rowsCount - 1,
                 cellID +  this.rowsCount + 1 ] 
    }   
    private isAlive(cellId:number): boolean {
        try {
            return this.frontEnd.isAlive(cellId)
        }
        catch(TypeError) {
            console.log(`NULL at: ${cellId}`)
        }
        return false
    }
    private revive(cellId:number) {
        this.frontEnd.revive(cellId)
    }
    private kill(cellId:number) {
        this.frontEnd.kill(cellId)
    }
    
    private getLiveNigbursCount(cellID: number) : number {
        var LiveNigbursCount = 0;
    
        for(var index of this.getNigbursIndexes(cellID)) {
            if(index >=0 && index < this.itemsCount) {  
                    if(this.isAlive(index)) {
                        LiveNigbursCount += 1
                    }
            }
        }
        return LiveNigbursCount
    }
    checkRules() {
        for(var i:number=0;i< this.itemsCount;i++) {
            console.log(`Check ID: ${i}`)
            var LiveNigbursCount = this.getLiveNigbursCount(i)
            console.log(`LiveNigbursCount: ${LiveNigbursCount}`)
            if(this.isAlive(i)) {
                switch(true) {
                    case LiveNigbursCount < 2: {
                        this.kill(i)
                        console.log(`Kill: ${i}`)
                        break
                    }
                    case LiveNigbursCount > 3: {
                        this.kill(i)
                        console.log(`Kill: ${i}`)
                        break
                    }
                } 
            }
            if(!this.isAlive(i)){
                if(LiveNigbursCount == 3) {
                   this.revive(i)
                   console.log(`revive: ${i}`)    
                }
            }
        }
    }
    startGame(initialCellsCount:number): void {
        for(let i=0;i< initialCellsCount;i++) {
          var index: number = Math.floor(Math.random() * (this.itemsCount));
          this.revive(index)
        }
    }
    async play() {
        while(1) {
            this.checkRules()
            await delay(500)
        }
    }
}
class WebFrontEnd implements IFrontend {
    private elements: HTMLCollectionOf<Element>
    constructor() {
        (async () => { 
            await delay(1000);
        })();
        this.elements = document.getElementById('grid-container').getElementsByClassName('grid-item')
    }
    isAlive(cellId:number) {
      if(this.elements.item(cellId).getAttribute('alive') == 'true') {
          return true
      }
      else {
          return false
      }
    }
    revive(cellId:number) {
        this.elements.item(cellId).setAttribute('alive','true') 
        this.elements.item(cellId).setAttribute('style','background-color: red;') 
    }
    kill(cellId:number) {
        this.elements.item(cellId).setAttribute('alive','false') 
        this.elements.item(cellId).setAttribute('style','background-color: blue;') 
    }
    
}
var first = true
var frontEnd: IFrontend
var game: IGameOfLive
window.onload = () => {
    if(first) {
        frontEnd = new WebFrontEnd()
        game = new GameOfLive(frontEnd, 50);
        game.startGame(200)
        first = false
    }
};