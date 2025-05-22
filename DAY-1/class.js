                                             // Inheritance using extends
// class cars{
//     constructor(model , year){
//             this.model = model
//             this.year  = year
//     }
//     carsonly(){
//         console.log(`car model is ${this.model} and year is ${this.year}`)
//     }
// }
// class automobile extends cars{
//     constructor(model , year , type){
//         super(model , year)
//         this.type = type
//     }
//     allvehicle(){
//         console.log(`the model of vehicle is ${this.model} the year is ${this.year} and the type is ${this.type}`)
//     }
// }
// const car1 = new automobile("chiron" , 2020 ,"car")
// car1.allvehicle()  
// //inheriting from the clid class
// car1.carsonly()
// //inheriting from parent class




                                                      //GETTER AND SETTER


// class person{
//     constructor(name , age){
//         this._name = name
//         this._age = age
//     }
//     get name(){
//         return this._name
//     }
//     set name(newname){
//         if (newname.length >5){
//             this._name  = newname
//         }else{
//             console.log('name is too short')
//         }
//     }
// }
// const person1 = new person("bhanu" , 23)
// person1.name = 'bh'
// person1.name = 'bhanuuu'
// console.log(person1.name)
                                                  



        
    
        
                                                        //private fields

class secretkey{
    #code
    constructor(code){
        this.#code = code
    }
    reveal(){
        return this.#code
    }
}
const s = new secretkey(1234)
console.log(s)



