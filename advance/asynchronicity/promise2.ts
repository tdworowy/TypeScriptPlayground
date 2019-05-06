function errorPromise(): Promise<void> {
    return new Promise<void>(
        (
            resolve: () => void,
            reject: () => void
        ) => {
            reject()
        }
    )
}
function callErrorPromise() {
    console.log("CcallErrorPromise")
    errorPromise().then(
        () => {console.log("No error")}
    ).catch (
        () => {console.log("Error")}
    )
}
callErrorPromise()

function deleayPromiseWithParam() : Promise<string> {
    return new Promise<string>(
        (
            resolve: (str: string) => void,
            reject: (str: string) => void
        ) => {
            function afterWait() {
                resolve("String from promisse.")
            }
            setTimeout(afterWait, 2000)
        }
    )
}
function callPromiseWithParam() {
    console.log("Call promise deleayPromiseWithParam")
    deleayPromiseWithParam().then(
        (message:string) => {
            console.log(`Return value of Pomise.then(): ${message}`)
        } 
    )
}
callPromiseWithParam()

interface IpromiseMessage {
    massage: string
    id: number
}
function deleayPromiseWithInterface() : Promise<IpromiseMessage> {
    return new Promise<IpromiseMessage>(
        (
            resolve: (message: IpromiseMessage) => void,
            reject: (message: IpromiseMessage) => void
        ) => {
            function afterWait() {
                resolve({massage: "String from promisse.", id:1})
            }
            setTimeout(afterWait, 2000)
        }
    )
}
function callPromiseWithInterface() {
    console.log("Call promise deleayPromiseWithParam")
    deleayPromiseWithInterface().then(
        (message:IpromiseMessage) => {
            console.log(`Return value of Pomise.then(): message:${message.massage}, id:${message.id}`)
        } 
    )
}
callPromiseWithInterface()