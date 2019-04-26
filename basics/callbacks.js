"use strict";
let callback1 = function callbackFunction(text) {
    console.log(`Inside callback1 ${text}`);
};
let callback2 = function (text) {
    console.log(`Inside callback2 ${text}`);
};
function doSmtWithCallback(initialText, callback) {
    console.log(`Inside doSmtWithCallback ${initialText}`);
    callback(initialText);
}
doSmtWithCallback("Test", callback1);
doSmtWithCallback("Test", callback2);
