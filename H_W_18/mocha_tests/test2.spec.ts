import { assert } from "chai";
import { LineWork } from "../task_1";
describe("LineWork.numSymbIndex chek", function(){
    
    it("numSymbIndex", function(){
        const exp = 'symbol: s, count:2'
        const act = new LineWork().numSymbIndex('strings', 0)
        //  assert.equal(act, exp)
        assert.equal(act, exp)
  })

  it("numSymbIndex", function(){
        const exp = 'symbol: s, count:2'
        const act = new LineWork().numSymbIndex('strings', 100)
         assert.equal(act, exp)
    })
})

























