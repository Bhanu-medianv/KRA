//Promises



//Q1=>Create a Promise that resolves after 2 seconds with the message "Hello after 2 seconds"

// const promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('Hello world')
//     },2000)
    
// })
// promise.then((value)=>console.log(value)).catch((err)=>console.log(err))









// Promise.resolve('res').then((val)=>console.log(val))

// Promise.all([
//     Promise.resolve('resolved first promise'),
//     Promise.resolve('resolved second promise'),
//     Promise.reject('rejected third promise')
// ]).then((val)=>console.log(val)).catch((err)=>console.log(err))









// function a(cb){
//     setTimeout(()=>{
//         console.log("I am 1")
//         cb()
//     })
// }
// function b(cb){
//     setTimeout(()=>{
//         console.log("I am 2")
//         cb()
//     })
// }
// function c(cb){
//     setTimeout(()=>{{
//         console.log('I am 3')
//     }})
//     cb()
// }
// function d(){
//     setTimeout(()=>{
//         console.log('I am 4')
//     })
// }
// a(()=>b(()=>(c(()=>d()))))










// function register(){
//     return new Promise((res , rej)=>{
//         setTimeout(()=>{
//             res(console.log("registered"))
//         },1000)
//     })
// }
// function login(){
//     return new Promise((res , rej)=>{
//         setTimeout(()=>{
//                 res(console.log("login"))
//             },1000)
//     })
// }
// function dashboard(){
//     return new Promise(
//         (res , rej)=>{
//         setTimeout(()=>{
//             res(console.log("dashboard"))
//         },1000)
//     }
//     )
// }
// register().then(()=>login()).then(()=>dashboard())









// function task1() {
//   return Promise.resolve("Task 1 done");
// }

// function task2() {
//   throw new Error("Something went wrong in task2");
// }

// task1()
//   .then(() => task2())
//   .then(() => console.log("Task 2 done"))
//   .catch((err) => {
//     console.error("Error:", err);
//   });

// function task1() {
//   return Promise.resolve("Task 1 done");
// }

// function task2() {
//   throw new Error("Something went wrong in task2");
// }

// async function main() {
//   try {
//     await task1();
//     await task2(); 
//     console.log("Task 2 done");
//   } catch (err) {
//     console.error("Error:", err);
//   }
// }

// main(); 






//promise.all()




// Promise.all([
//     Promise.resolve(' resolve first'),
//     Promise.resolve(' resolve second'),
//     Promise.reject(' rej third'),
// ]).then((value)=>console.log(value)).catch((err)=>console.log(err))






// Promise.allSettled([
//     Promise.resolve('i am First'),
//     Promise.resolve('i am Second'),
//     Promise.reject('i am third'),
// ]).then((value)=>console.log(value)).catch((err)=>console.log(err))
 






// Promise.race([
//     new Promise((res , rej)=>{
//         setTimeout(()=>res('this is first'),1000)
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(()=>res('this is second'),500)
//     })
// ]).then((value)=>console.log(value)).catch(err=>console.log(err))





// Promise.any([
//     Promise.resolve('this is resolve  1'),
//     Promise.resolve('this is resolve  2'),
//     Promise.reject('this is reject  1'),
// ]).then((value)=>console.log(value)).catch((err)=>console.log(err)).finally(()=>console.log('catched finally'))






// Promise.all([
//     Promise.reject('this is zeroth '),
//     new Promise((res,rej)=>{
//         setTimeout(()=>res('i am First'),1000)
//     }),
//     Promise.resolve('this is the resolve second'),
//     Promise.reject('this is the Third')
   
// ]).then((value)=>console.log(value)).catch(err=>console.log(err)).finally(()=>console.log('finally'))







//Promise.race


// let fetchdata = new Promise((res,rej)=>{
//     setTimeout(()=>res('data loaded !!'),3000)
// })
// let Timesup = new Promise((res,rej)=>{
//     setTimeout(()=>res('timeout !!'), 2000)
// })
// Promise.race([fetchdata ,Timesup])
// .then((value)=>console.log(value))
// .catch((err)=>console.log(err))







//Combining Promises with Parallel and Sequential Execution


// Promise.all([
//     new Promise((res,rej)=>{
//         setTimeout(()=>res('I am first'),1000)
//     }),
//     new Promise((res,rej)=>{
//         setTimeout(()=>res('i am second'),500)
//     })
// ]).then(([resA , resB])=>{console.log(resA,resB)
//     return new Promise((res,rej)=>{
//         setTimeout(()=>res('I am third'),700)
//     })

// }).then((value)=>console.log(value))







// function fun(message , delay){
//     return new Promise((res,rej)=>{
//             setTimeout(()=>res(message),delay)
//     })
// }
// async function execute(){
//     try {
//         const eg1 = await(fun('i am first message' , 1000))
//         console.log(eg1)
//         const eg2 = await (fun('i am second message',1000))
//         console.log(eg2)
//     } catch (error) {
//             console.log(error)
//     }
// }
// execute()






// Custom implementation of a basic Promise



class CustomPromise{
        constructor (executer){
            this.state = 'pending'
            this.value = 'undefined'
            this.handlers = []
        
            const resolve = (value)=>{
            if(this.state==='pending'){
                this.state ='fulfilled'
                this.value = value
                this.handlers.forEach(this.handle)
            }
            }
            const reject =(error)=>{
                if(this.state ==='pending'){
                    this.state = 'rejected'
                    this.value = error
                    this.handlers.forEach(this.handle)
                }
            }
            try {
                executer(resolve,reject)
            } catch (error) {
                reject(error)
            }
        }
        handle=(handler)=>{
                if(this.state ==='fulfilled'){
                    handler.onFulFilled(this.value)
                }
                else if(this.state ==='rejected'){
                    handler.onRejected(this.value)
                }
        }
        then(onFulFilled , onRejected){
            return new CustomPromise((resolve , reject)=>{
                const handler = {
                    onFulFilled:(value)=>{
                        if (onFulFilled){
                            try {
                                resolve(onFulFilled(value))
                            } catch (error) {
                                    reject(error)                              
                            }
                        }else{
                            resolve(value)
                        }
                    },
                    onRejected:(error)=>{
                        if(onRejected){
                            try {
                                resolve(onRejected(error))
                            } catch (error) {
                                reject(error)
                            }
                        }else{
                            reject(error)
                        }
                    }
                }
                if (this.state ==='pending'){
                    this.handlers.push(handler)
                }else{
                    this.handle(handler)
                }
            })
        }
    catch(onrejected){
        return this.then(null , onrejected)
    }
}  
const promise = new CustomPromise((resolve , reject)=>{
    setTimeout(()=>{
        resolve('custom promise')
    },1000)
})

promise.then((message)=>{
    console.log(message)
    return 'Next step'
})
.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log('error' , error)
})