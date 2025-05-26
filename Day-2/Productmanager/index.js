const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./data.json',{encoding:'utf-8'}))
class Product{
    constructor(pdata){
        Object.assign(this , pdata)
        // this.getData()
        
    }
    getData(){
        console.log(this.name)
    }
    
    
}
class Customer{
    constructor(custdata){
        Object.assign(this , custdata)
        // this.getdetails()
    }
    getdetails(){
        console.log(this.Name)
    }
}
const proddata = data.products.map((obj)=>new Product(obj)).map((obj)=>({...obj}))
const custdata = data.Customer.map((obj)=>new Customer(obj)).map((obj)=>(JSON.parse(JSON.stringify(obj))))



// functionalities


//products by category = pc
const pc = proddata.reduce((acc , item)=>{
    const key = item.category
    if(!acc[key]){
        acc[key] = []
    }
    acc[key].push(item)
    return acc
},{})
console.log("product by category :--",pc)


console.log("x x x x  x x x x x x x   x x  x x  x x x")
// Avarage rating per category = arpc

const arpc = Object.entries(pc).map(([category,products])=>{
    const avg = products.reduce((acc,item)=>
        acc +item.rating
    ,0)/products.length
    console.log(`average rating by category ${category} : ${avg}`)
})


console.log("x x x x  x x x x x x x   x x  x x  x x x")
//customer with most orders


//most orders =mo
let max_order ={cid:0 , n_order:0}
const mo = custdata.forEach((customer)=>{
    
    const curr_val = customer.orders_detail.reduce((acc,index)=>acc+index.quantities ,0)
    if(curr_val >max_order.n_order){
        max_order.n_order =curr_val
        max_order.cid =customer.Cid
    }
})

console.log("max_order :-",max_order)

console.log("x x x x  x x x x x x x   x x  x x  x x x")
//most amount spent on order
const pmap = {}
proddata.map((prod)=>{pmap[prod.id]=prod.Price})

let max_amount ={cid:0 , amount:0}
const ma = custdata.map((customer)=>{
    let total =0
    customer.orders_detail.map(order =>{total +=pmap[order.pid]*order.quantities})
    if(total>max_amount.amount){
        max_amount.cid = customer.Cid,
        max_amount.amount = total
    }
})
console.log("max_amount  :-  ",max_amount)


console.log("x x x x  x x x x x x x   x x  x x  x x x")
//product needing restock


proddata.forEach(product=>{
    if(product.threshold>product.quantities){
        console.log(`need to restock ${product.name}`)
    }
})


console.log("x x x x  x x x x x x x   x x  x x  x x x")

let total = 0
proddata.forEach(product=>{
    
    total +=product.Price * product.quantities
    
})
console.log(`Total revenue of the inventory ${total}`)