import { Injectable } from '@angular/core';
import {Hero} from '../models/Hero';
import { HEROES } from '../seeders/seederHeroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {

  }

  getHeores():Promise<any>{
    
    return new Promise((resolve,reject)=>{
      
      setTimeout(()=>{
        resolve(HEROES);
      },2000);

    });

  }

}
