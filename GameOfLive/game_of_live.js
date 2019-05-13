"use strict";
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
class GameOfLive {
    constructor(frontEnd, rowsCount) {
        this.frontEnd = frontEnd;
        this.rowsCount = rowsCount;
        this.itemsCount = this.rowsCount * this.rowsCount;
    }
    getNigbursIndexes(cellID) {
        return [cellID - 1,
            cellID + 1,
            cellID + this.rowsCount,
            cellID - this.rowsCount,
            cellID - this.rowsCount - 1,
            cellID - this.rowsCount + 1,
            cellID + this.rowsCount - 1,
            cellID + this.rowsCount + 1];
    }
    isAlive(cellId) {
        try {
            return this.frontEnd.isAlive(cellId);
        }
        catch (TypeError) {
            console.log(`NULL at: ${cellId}`);
            return false;
        }
    }
    revive(cellId) {
        this.frontEnd.revive(cellId);
    }
    kill(cellId, color = 'black') {
        this.frontEnd.kill(cellId, color);
    }
    getLiveNigbursCount(cellID) {
        var LiveNigbursCount = 0;
        for (var index of this.getNigbursIndexes(cellID)) {
            if (index >= 0 && index < this.itemsCount) {
                if (this.isAlive(index)) {
                    console.log(`${index} IS ALIVE`);
                    LiveNigbursCount += 1;
                }
            }
        }
        return LiveNigbursCount;
    }
    checkRules() {
        for (var i = 0; i < this.itemsCount; i++) {
            console.log(`Check ID: ${i}`);
            var LiveNigbursCount = this.getLiveNigbursCount(i);
            console.log(`LiveNigbursCount: ${LiveNigbursCount}`);
            if (this.isAlive(i)) {
                switch (true) {
                    case LiveNigbursCount < 2: {
                        this.kill(i);
                        console.log(`Kill: ${i}`);
                        break;
                    }
                    case LiveNigbursCount > 3: {
                        this.kill(i);
                        console.log(`Kill: ${i}`);
                        break;
                    }
                }
            }
            if (!this.isAlive(i)) {
                if (LiveNigbursCount == 3) {
                    this.revive(i);
                    console.log(`revive: ${i}`);
                }
            }
        }
    }
    spawnCells(initialCellsCount) {
        for (let i = 0; i < initialCellsCount; i++) {
            var index = Math.floor(Math.random() * (this.itemsCount));
            this.revive(index);
        }
    }
    killAll() {
        for (var i = 0; i < this.itemsCount; i++) {
            this.kill(i, 'blue');
        }
    }
    async play() {
        while (1) {
            this.checkRules();
            await delay(500);
        }
    }
}
class WebFrontEnd {
    constructor() {
        (async () => {
            await delay(1000);
        })();
        this.elements = document.getElementById('grid-container').getElementsByClassName('grid-item');
    }
    isAlive(cellId) {
        if (this.elements.item(cellId).getAttribute('alive') == 'true') {
            return true;
        }
        else {
            return false;
        }
    }
    revive(cellId) {
        this.elements.item(cellId).setAttribute('alive', 'true');
        this.elements.item(cellId).setAttribute('style', 'background-color: red;');
    }
    kill(cellId, color = 'black') {
        this.elements.item(cellId).setAttribute('alive', 'false');
        this.elements.item(cellId).setAttribute('style', `background-color: ${color};`);
    }
}
var first = true;
var frontEnd;
var game;
function initialize() {
    var cellsCount = document.getElementById("cells");
    game.killAll();
    game.spawnCells(Number(cellsCount.value));
}
window.onload = () => {
    frontEnd = new WebFrontEnd();
    game = new GameOfLive(frontEnd, 70);
    game.spawnCells(50);
};
