class MockAsyncClass {
    executeSlowFunction(success: (value:string)=> void) {
        setTimeout(()=>{
            success("success")
        }, 1000)
    }
}
describe("Async tests", ()=> {
    let returnedValue: string
    beforeEach((done)=> {
        returnedValue ="no_return_value"
        let mockAsync = new MockAsyncClass()
        mockAsync.executeSlowFunction((value:string)=> {
            returnedValue = value
            done()
        })
    })
    it("Should return 'success'", (done)=> {
        expect(returnedValue).toEqual("success")
        done()
    })
})