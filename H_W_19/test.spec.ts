//- Написать минимум 10 API тестов для разных HTTP методов. 
//За источник можно брать сайт https://reqres.in/ 
//или любой другой сайт с открытым API. 
//Использовать Jest + superAgent

// *Группируем тесты с помощью Describe. Так же применяем хуки, где они уместны*

import superagent from "superagent"


describe("get request - reqres ", () => {
     it("LIST USERS", async () => {
    try {
      const res = await superagent.get("https://reqres.in/api/users?page=2")
      expect(res.status).toBe(200);
    } catch (error: any) {
      expect(error.message).toBe("Not Found");
    }
  });
  it("SINGLE USER", async () => {
    try {
      const res = await superagent.get("https://reqres.in/api/users/2")
      expect(res.status).toBe(200);
    } catch (error: any) {
      expect(error.message).toBe("Not Found");
    }
  });
  it("SINGLE USER NOT FOUND", async () => {
    try {
      const res = await superagent.get("https://reqres.in/api/users/23")
      expect(res.status).toBe(404);
    } catch (error: any) {
      expect(error.message).toBe("Not Found");
    }
  });
  it("LIST <RESOURCE>", async () => {
    try {
      const res = await superagent.get("https://reqres.in/api/unknown")
      expect(res.status).toBe(200);
    } catch (error: any) {
      expect(error.message).toBe("Not Found");
    }
  });
  it("SINGLE <RESOURCE>", async () => {
    try {
      const res = await superagent.get("https://reqres.in/api/unknown/23")
      expect(res.status).toBe(404);
    } catch (error: any) {
      expect(error.message).toBe("Not Found");
    }
  });
});



describe("post request - reqres ", () => {

  it("CREATE", async () => {
    const res = await superagent.post("https://reqres.in/api/users/")
      .set("Content-Type", "application/json")
      .send({ name: "morpheus", job: "leader", id:"808",createdAt:"2023-01-05T15:49:22.178Z" });
    expect(res.status).toBe(201);
    
  });

it("REGISTER - SUCCESSFUL", async () => {
    const newResult = await superagent.post("https://reqres.in/api/register")
      .set("Content-Type", "application/json")
      .send({ email: "eve.holt@reqres.in", password: "pistol" });
    expect(newResult.body).toEqual({id: 4,token: "QpwL5tke4Pnpja7X4"})
  });

});



describe("put request - reqres ", () => {
  it("UPDATE", async () => {
    const res = await superagent.put("https://reqres.in/api/users/2")
      .set("Content-Type", "application/json")
      .send({ name: "morpheus", job: "zion resident","updatedAt": "2023-01-05T16:34:31.555Z" });
    expect(res.status).toBe(200);
    
  });
});


describe("delete request - reqres ", () => {
  test("update", async () => {
    const res = await superagent.put("https://reqres.in/api/users/2")
      .set("Content-Type", "application/json")
      .send({ name: "morpheus", job: "zion resident","updatedAt": "2023-01-05T16:31:29.868Z" });
    expect(res.status).toBe(200);
  });
});

describe("delete request - reqres ", () => {
  test("delete", async () => {
    const res = await superagent.delete("https://reqres.in/api/users/2")
      .set("Content-Type", "application/json");
    expect(res.status).toBe(204);
    
  });
});

// а почему, пишет что Test Suites: 1 passed, когда их 5?


























// describe("api request", () => {
//     it(" 1 LIST USERS", async () => {
//         const response = await superagent.get("https://reqres.in/api/users?page=2");
//         // console.log(response.status);
//         expect(200).toBe(response.status); 
//         //
//     });

//      it("2 SINGLE USER", async () => {
//         const response = await superagent.get("https://reqres.in/api/users/2");
//          expect(200).toBe(response.status);
//     });


//      it(" 3 SINGLE USER NOT FOUND", async () => {
//         let response: any
//         try{
//          response = await superagent.get("https://reqres.in/api/users/23");
//          expect(200).toBe(response.status);
//         } catch(err:any){//НЕ ПОНИМАЮ ПОЧЕМУ ЭТО ТЕСТ ПРОХОДИТ. РУГАЕТСЯ ТОЛЬКО НА СТРОКУ 28 (expect (response.status);)
//             //expect (response.status); 
//             }
            
        
//      });

//      it("4 SINGLE USER NOT FOUND", async () => {
       
//         try{
//          const response = await superagent.get("https://reqres.in/api/users/23");
//           expect(200).toBe(response.status);
//           } catch(err:any){
//             expect(err.message)  //toBe(404)
//         }
//     })


//      it("5 LIST <RESOURCE>", async () => {
       
//         try{
//          const response = await superagent.get("https://reqres.in/api/unknown");
//           expect (response.status).toBe(200);
         
//         } catch(err:any){}
        
//     })
    // it(" 6 create", async () => {
    //     const response = await superagent.post("https://reqres.in/api/users/2");
    //     const actbody = {
    //     "name": "morpheus",
    //      "job": "leader"
    //          }
    //     expect(response).toEqual(actbody);
    // })

// })

// describe('SINGLE USER', ()=>{
//     it('test 1', async () =>{
//         const res = await superagent.get('https://reqres.in/api/users/2')
//         expect(res.statusCode).toBe(200)
//     })

//      it(" 1 LIST USERS", async () => {
//         const res = await superagent.get("https://reqres.in/api/users?page=2");
//         expect(res.statusCode).toBe(200)
        
//     });
//      it(" 3 SINGLE USER NOT FOUND", async () => {
//         let res: any
//         try{
//          res = await superagent.get("https://reqres.in/api/users/23");
//          expect(res.statusCode).toBe(200)
//         } catch(err:any){//НЕ ПОНИМАЮ ПОЧЕМУ ЭТО ТЕСТ ПРОХОДИТ. РУГАЕТСЯ ТОЛЬКО НА СТРОКУ 28 (expect (response.status);)
//             //expect (res.statusCode); 
//             }
//     });
//     // it('test 3', async () =>{
//     //     const res = await superagent.get('https://reqres.in/api/users/23')
//     //     expect(res.statusCode).toBe(200) //("Not Found")// а этот должен пройти, но он валится 
//     // })

//       it("4 SINGLE USER NOT FOUND", async () => {
       
//         try{
//          const res = await superagent.get("https://reqres.in/api/users/23");
//          expect(res.statusCode).toBe(200)
//           } catch(err:any){
//             expect(err.message).toBe("Not Found") //х
//         }
//     })
// })
