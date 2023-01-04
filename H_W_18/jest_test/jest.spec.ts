import { LineWork } from "../task_1";

describe("LineWork check jest", function(){
    test('numSymbIndex',function(){
         const exp = 'symbol: s, count:2'
        const act = new LineWork().numSymbIndex('strings', 0)
        // expect(act).toEqual(exp)
        expect(act).toBe(exp) 
        //assert.equal(act, exp)

    })

     it("numSymbIndex", function(){
        const exp = 'symbol: s, count:17'
        const act = new LineWork().numSymbIndex('s stringsstrinstringsstrings stringsstrings stringsstrings s  ', 0)
       expect(act).toEqual(exp)
         
    })
     test("numSymbIndex", function(){
        const exp = 'symbol: s, count:23'
        const act = new LineWork().numSymbIndex('strings', 0)
         expect(act).toEqual(exp)
    })

      it("numSymbIndex", function(){
        const exp = 'symbol: s, count:2'
        const act = new LineWork().numSymbIndex('strings', 100)
         expect(act).toEqual(exp)
         // здесь тоже виснет.
    })
})