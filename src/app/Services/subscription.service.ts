import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http:HttpClient) { }
  GetAllPlan(){
    const headers = {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' 
    }
    let vew_url=environment.baseURL+environment.subscription.getallplan
    return this.http.get(vew_url,{ 'headers': headers })
  }
  SubscribePlan(ID:any){
    let data =
    {
      "subscriptionId":ID,
      "id":localStorage.getItem('id')
  }
  let api_url=environment.baseURL+environment.subscription.subscribeplan
  const headers = {
    'content-type': 'application/json',
    'Authorization': 'Bearer ' 
  }
  return this.http.post(api_url,data,{ 'headers': headers })
  }
  paymentwithsubscribe(subscriptionId,cardId,Payamount,PortalNAme){
    let data ={
      
        "subscriptionId":subscriptionId,
        "id":localStorage.getItem('id'),
        "cardId":cardId,
        "payAmt":Payamount,
        "description":'PortalNAme'
    }
    
    let view_url=environment.baseURL+environment.subscription.newSubscribleplanapi
    return this.http.post(view_url,data)
    
  }
  GetSubscriptionPlanById(){
    let id=localStorage.getItem('id')
    let view_url=environment.baseURL+environment.subscription.GetSubscriptionDetailsByID+'/'+id
     const headers = {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' 
    }
    return this.http.get(view_url)
  }
  GetSubscriptionCheck(){
    let id=localStorage.getItem('id')
    let view_url=environment.baseURL+environment.subscription.checksuscription+'/'+id
     const headers = {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' 
    }
    return this.http.get(view_url)
  }
  canceplanSusbc(Id:any,id:any){
    let data= {
      "id":Id,
      "cancelReason":id.cancelReason

    }
    let view_url=environment.baseURL+environment.subscription.canceplan
    const headers = {
      'content-type': 'application/json',
      'Authorization': 'Bearer ' 
    }
    return this.http.put(view_url,data,{'headers':headers})
    {

  }
  }
  RenewSubscription(subsId:any){
   let data= {
      "subscriptionId":subsId,
      "id":localStorage.getItem('id')
  }
  let view_url=environment.baseURL+environment.subscription.updateSubscription
  const headers = {
    'content-type': 'application/json',
    'Authorization': 'Bearer ' 
  }
  return this.http.put(view_url,data,{'headers':headers})
  }
  CheckSubscriptionPlan(id){
    let view_url=environment.baseURL+environment.subscription.checksuscription+'/'+id
  const headers = {
    'content-type': 'application/json',
    'Authorization': 'Bearer ' 
  }
  
  return this.http.get(view_url,{'headers':headers})
  }
  getToken(){
    return localStorage.getItem('token')
  }
  
}
