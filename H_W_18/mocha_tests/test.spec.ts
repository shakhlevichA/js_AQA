import assert from "assert";
import { LineWork } from "../task_1";
describe("LineWork.numSymbIndex chek", function(){
    
    it("numSymbIndex", function(){
        const exp = 'symbol: s, count:2'
        const act = new LineWork().numSymbIndex('strings', 0)
         assert.equal(act, exp)
  })
  it("numSymbIndex", function(){
        const exp = 'symbol: s, count:17' // Я думаю это можно считать положительным.
        // Но мне кажется, что он бессмысленный, так по сути он дублирует первый.
        // если добавить значительно больше то это уже будет негативный.
        // я прав? 
        // из позитивных, тот только если проверить минимальные значения и максимальные значения, и то ток как 
        // я сам писал то я знаю, что их нет. А если задать очень длинный, то у меня виснет ide.
        // или  я что-то упускаю?
        const act = new LineWork().numSymbIndex('s stringsstrinstringsstrings stringsstrings stringsstrings s  ', 0)
         assert.equal(act, exp)
         
    })
    
    
    it("numSymbIndex", function(){
        const exp = 'symbol: s, count:2'
        //const act = new LineWork().numSymbIndex('strings', 100)
         assert.equal('symbol: s, count:22', exp)
    })//так, работает.

     it("numSymbIndex", function(){
        const exp = 'symbol: s, count:23'
        const act = new LineWork().numSymbIndex('strings', 0)
         assert.equal(act, exp)
    })

     it("numSymbIndex", function(){
        const exp = 'symbol: , count:'
        const act = new LineWork().numSymbIndex('strings',0)
         assert.equal(act, exp)
    })
    
    //Странно, но все негативные виснут. Выход только через ^C
   

    // ПОЛУЧАЕТСЯ ТОЛЬКО EXPECTED RESULT МОЖЕТ БЫТЬ НЕ ПРАВЕЛЬНЫМ? 
    // А ЕСЛИ ПАРАМЕТРЫ ВВОДА НЕ ВЕРНЫ, КАК ПРОВЕРИТЬ?
    // ЧТО Я УПУСКАЮ?
    
})

  
    // it("numSymbIndex", function(){
    //     const exp = 'symbol: s, count:259'
    //     const act = new LineWork().numSymbIndex('s stringsstrinstringsstrings stringsstrings stringsstrings s  ', 0)
    //      assert.equal(act, exp)
         
    // })
    // it("numSymbIndex", function(){
    //     const exp = 'symbol: , count:'
    //     const act = new LineWork().numSymbIndex('',0)
    //      assert.equal(act, exp)
    // })
    // it("numSymbIndex", function(){
    //     const exp = 'symbol: s, count:2'
    //     const act = new LineWork().numSymbIndex('strings', 100)
    //      assert.equal(act, exp)
    // })
    // it("numSymbIndex", function(){
    //     const exp = 'symbol: s, count:2'
    //     const act = new LineWork().numSymbIndex('str\nings', 0)
    //      assert.equal(act, exp)
    // })

























