function awaitDelay(): Promise<void> {
    return new Promise<void> (
        (
            resolve: () => void,
            reject: () => void) => {
                function afterWait() {
                    console.log(`call resolve`)
                    resolve()
                }
                setTimeout(afterWait, 2000)
            }
        )
}

async function callAwaitDeley() {
    console.log(`call awaitDelay`)
    await awaitDelay()
    console.log(`after awaitDelay`)
}
callAwaitDeley()

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

async function callDeleayPromiseWithParam() {
    console.log(`call deleayPromiseWithParam`)
    let message:string = await deleayPromiseWithParam()
    console.log(`after deleayPromiseWithParam`)
    console.log(`message from promise: ${message}`)
}
callDeleayPromiseWithParam()