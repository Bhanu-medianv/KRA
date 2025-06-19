import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from './DTO/order.dto';
import { resourceUsage } from 'process';
import { ClientProxy } from '@nestjs/microservices';
import { PaymentService } from 'src/payment/payment.service';

@Injectable()
export class OrderService {
    constructor (private readonly paymentServices:PaymentService){}
    private orders = [
        {   "id":1,
            "orderId": "order1",
             "userId": "user1",
         "amount": 10000 },
         {  "id":2,
             "orderId": "order2",
             "userId": "user2",
         "amount": 20000 },
         { "id":3,
            "orderId": "order3",
             "userId": "user3",
         "amount": 30000 },
         { "id":4,
            "orderId": "order4",
             "userId": "user",
         "amount": 40000 }
    ]
    create(orderdto:OrderDto){
        const ordersByHighestId = [...this.orders].sort((a,b)=>b.id-a.id)
        const newOrder = {id:ordersByHighestId[0].id +1 ,...orderdto}
        this.orders.push(newOrder)
        const paymentResponse = this.paymentServices.processPayment(orderdto)
        console.log(paymentResponse)
        return {
            orderdto:OrderDto,
            paymentResponse:paymentResponse
        }
    }
    findAll(){
        return this.orders 
    }
    findOne(id:number){
        const oid = this.orders.find((order)=>order.id ===id)
        return oid
    }
    
}
