describe("exampleTest.ts", () => {
    it("Variable should be defined", () => {
        let undefinedValue = 'TEST'
        expect(undefinedValue).toBeDefined()
    })
    it("Variable should have be 2", () => {
        let twoValue = 2
        expect(twoValue).toBe(2)
    })
    it("Variable should contains be a", () => {
        let stringValue = "1212a122"
        expect(stringValue).toContain('a')
    })
    it("Variable should be true", () => {
        let trueValue = true
        expect(trueValue).toBeTruthy()
    })
    it("Variable should be false", () => {
        let falseValue = false
        expect(falseValue).toBeFalsy()
    })
    it("Variable should be false2", () => {
        let falseValue = false
        expect(falseValue).not.toBeTruthy()
    })
    it("Objects should be equle", () => {
        let obj1 = {a:1, b:2 }
        let obj2 = {a:1, b:2 }
        expect(obj1).toEqual(obj2)
    })
})