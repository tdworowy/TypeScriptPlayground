let callback1 = function callbackFunction(text: string) {
    console.log(`Inside callback1 ${text}`)
}
let callback2 = function (text: string) {
    console.log(`Inside callback2 ${text}`)
}
function doSmtWithCallback( initialText:string, 
                            callback:(initialTest: string) => void) {
    console.log(`Inside doSmtWithCallback ${initialText}`)
    callback(initialText)
}

doSmtWithCallback("Test", callback1)
doSmtWithCallback("Test", callback2)