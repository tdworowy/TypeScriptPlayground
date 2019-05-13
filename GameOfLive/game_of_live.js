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
        }
        return false;
    }
    revive(cellId) {
        this.frontEnd.revive(cellId);
    }
    kill(cellId) {
        this.frontEnd.kill(cellId);
    }
    getLiveNigbursCount(cellID) {
        var LiveNigbursCount = 0;
        for (var index of this.getNigbursIndexes(cellID)) {
            if (index >= 0 && index < this.itemsCount) {
                if (this.isAlive(index)) {
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
    startGame(initialCellsCount) {
        for (let i = 0; i < initialCellsCount; i++) {
            var index = Math.floor(Math.random() * (this.itemsCount));
            this.revive(index);
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
    kill(cellId) {
        this.elements.item(cellId).setAttribute('alive', 'false');
        this.elements.item(cellId).setAttribute('style', 'background-color: blue;');
    }
}
var first = true;
var frontEnd;
var game;
window.onload = () => {
    if (first) {
        frontEnd = new WebFrontEnd();
        game = new GameOfLive(frontEnd, 50);
        game.startGame(200);
        first = false;
    }
};
