import { Injectable } from '@angular/core';
import {Hero} from '../models/Hero';
import { HEROES } from '../seeders/seederHeroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private _sMessage:MessageService) {

  }

  getHeores():Promise<any>{
    
    return new Promise((resolve,reject)=>{
      
      setTimeout(()=>{
        let hora = new Date();
        this._sMessage.add("Fetched HEROES" + hora);
        resolve(HEROES);
      },2000);

    });

  }

}
