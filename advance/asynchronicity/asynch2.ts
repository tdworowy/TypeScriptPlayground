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