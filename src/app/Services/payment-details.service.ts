import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  constructor(private http:HttpClient) { }
  paymentregardcard(id:any){
    let data=
 
    {
      "id":localStorage.getItem('id'),
    "cardNumber":id.cardNumber,
    "nameOnCrad":id.nameOnCrad,
     "expMonth":id.expMonth,
    "expYear":id.expYear,
    "cvc":id.cvc

    }
   
    let url="https://immense-brook-06350.herokuapp.com/api/payment/saveCard"
   
    return this.http.post(url,data)
  }
  GetAllCard(){
    let Id=localStorage.getItem('id')
  let url="https://immense-brook-06350.herokuapp.com/api/payment/getAllCards"+'/'+Id
  return this.http.get(url)
  }
  ToCalculatepayment(Payment:any){
    let data=
    {
       "payAmt":Payment
  }
  let url="https://immense-brook-06350.herokuapp.com/api/payment/calculatePayment"
   
  return this.http.post(url,data)
  }
  Topayment(cardID,Payment,){
    let data=
    {
      "userId":localStorage.getItem('id'),
      "cardId":cardID,
      "payAmt":Payment
  }
  let url="https://immense-brook-06350.herokuapp.com/api/payment/checkoutPayment"
   
  return this.http.post(url,data)
  }
}
