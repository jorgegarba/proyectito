import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  messages:string[] = [];

  constructor() {
    console.log("Alguien ha consumido este servicio (MESSAGE)");
    
  }

  add(message:string):void{
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }

}
