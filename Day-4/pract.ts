// function greet(name:string):string{
//     return `this is ${name}`
// }
// console.log(greet('bhanu'))


// interface User{
//     name:string,
//     marks:number,
//     isPass:boolean,
//     apiResponse:unknown
// }
// function fun(u:User):string{
//         return `                name :${u.name}
//                 marks:${u.marks}
//                 ispass:${u.isPass}
//                 apiResponse:${u.apiResponse}`
// }
// console.log(fun({name:'bhanu',marks:70 , isPass:true ,apiResponse:"sdfgas"}))




// function getlength(value:unknown):Number{
//     if(typeof value ==="string"){
//         return value.length
//     }
//     return 0
// }
// console.log(getlength("petra"))




// function crashapp(err:string):never{
//     throw new Error(err)
// }
// crashapp("this is error")          ////////////// Error always takes string//////////////




// type User = [number , string]
// const newsuser :User= [112, '112' ]
// console.log(newsuser.push(2,2))





// enum Seatchoice{
//     aisle='aisle',
//     middle='middle',
//     window = 'window'
// }
// const seat:Seatchoice = Seatchoice.window
// console.log(seat)




// type Person = [string , number]
// enum role{
//     admin ='admin' ,
//     user ="user", 
//     guest ='guest'
// }
// const person:[string , number , role][] = [
//     ['bhanu' , 23 , role.admin],
//     ['nikhil' , 24 , role.guest]
// ]
// console.log(person)




// type ID = string | number

// const id:ID = 23
// const id2:ID = 'as'
// console.log(id , id2)




// interface People{
//     name:string,
//     age:number,
// }
// interface Officedetails{
//     E_id:'string',
//     department:'string'
    
// }
// type company = People & Officedetails

// const detail:company = {}





