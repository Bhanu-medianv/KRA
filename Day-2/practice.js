// const obj = {
//     print : function(){
//         function print2(){
//             console.log(this)
//         }print2()
//     }   
// }
// obj.print()





// const obj ={
//     name:'bhanu',
//     fun1 :()=>{
//         console.log(this)
//     }
// }
// obj.fun1()






// const obj ={
//     name:'Bhanu',
//     fun1:function show(){
//         console.log(this)
//     }show()
    
// }
// obj.fun1()











// const  obj = {
//     name:'bhanu',
//     role:'sde',
//     print :()=>{
//         function fun2(){
//             console.log(this)
//         }
//         fun2()
//     }
// }
// obj.print()

// const fun1 = {
//     name:'bhanu',
//     role:'sde',
//     place:'guj'
// }
// const fun2 =(fun1 )=>{
//     const {name ,role , place} = fun1
//     return([name,
//     role, 
//     place])
// }
// console.log(fun2(fun1))







// const data = {
//     name:'bhanu',
//     role:'sde'
// }
// class some{
//     constructor({name , role}){
//         this.name = name
//         this.role = role
//     }
//     getitem(){
//         console.log(this.name)
//     }
// }
// const person = new some(data)
// person.getitem()








// const data = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5
// }
// class compo{
//     constructor(data){
//         Object.assign(this , data)
//     }
//     getdata(){
//         const {...onlyobj} = this
//         console.log(onlyobj)
//     }
// }
// const alpha =new compo(data)
// alpha.getdata()






// const data = [1 ,3,4,[2 ,3 ,[4,5],7,8],9]
// function flatten(data){
//         const stack = [...data]
//         const result = []
//         while (stack.length){
//             const next = stack.pop()
//             Array.isArray(next) ? stack.push(...next):result.push(next)
//         }
//         return result.reverse()
// }
// console.log(flatten(data))






// const data = [1 ,3,4,[2 ,3 ,[4,5],7,8],9]
// function flatten(data){
//         const stack = [...data]
//         const result = []
//         while (stack.length){
//             const next = stack.shift()
//             Array.isArray(next) ? stack.unshift(...next):result.push(next)
//         }
//         return result
// }
// console.log(flatten(data))







// const array = [1 ,3,4,[2 ,3 ,[4,5],7,8],9]
// let array_2 =[] 
// const new_array = array.map((item=>{
       
//     if(Array.isArray(item)){
//            array_2 =  array_2.concat(item)
//         }
//     else{
//         array_2.push(item)
//     }
//     return array_2
// }))
// console.log(array_2)





// const data = [1,2,[3,4,[5,6],[6,7] ,8],9]
// function flatten(data){
//     return data.reduce((acc , el)=>{
//         return acc.concat(Array.isArray(el) ?flatten(el) : el)
//     },[])
// }
// console.log(flatten(data))



// const data = [1,2,3,4,5,6,7]
// console.log(data.includes(3,2))




// const data = [1,2,3,4,5,6,7,8]
// console.log(data.join(''))




function sum(){
    console.log({...arguments})
}
sum(1,2,3,4,5)