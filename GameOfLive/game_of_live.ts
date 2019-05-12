
interface IFrontend {
    isAlive(cellId:number): boolean
    kill(cellId:number): void
    revive(cellId:number): void 
}
interface IGameOfLive {
    startGame(): void
}
class GameOfLive implements IGameOfLive{

    private frontEnd: IFrontend
    private rowsCount: number
    
    constructor(frontEnd: IFrontend, rowsCount:number) {
        this.frontEnd = frontEnd
        this.rowsCount = rowsCount
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
        return this.frontEnd.isAlive(cellId)
    }
    private getLiveNigbursCount(cellID: number) : number {
        var LiveNigbursCount = 0;
    
        for(var index of this.getNigbursIndexes(cellID)) {
            if(this.isAlive(index)) {
                LiveNigbursCount = +1
            }
        }
        return LiveNigbursCount
    }
    startGame(): void {

    }
}