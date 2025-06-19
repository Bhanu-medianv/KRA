import { Injectable } from '@nestjs/common';
import { OrderDto } from 'src/order/DTO/order.dto';

@Injectable()
export class PaymentService {
    processPayment(orderdto:OrderDto){
        new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('Payment sucessfull')
            },2000)
        })
        return {
            message:'payment done'
        }
    }
}
