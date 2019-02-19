import { Injectable } from '@angular/core';
import {Hero} from '../models/Hero';
import { HEROES } from '../seeders/seederHeroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  HeroesCopia:Array<Hero>  = HEROES;

  constructor(private _sMessage:MessageService) {

  }

  getHeores():Promise<any>{
    
    return new Promise((resolve,reject)=>{
    
      setTimeout(()=>{
        let hora = new Date();
        this._sMessage.add("Fetched HEROES" + hora);
        resolve(HEROES);
      },1000);

    });

  }

  getHeroById(id:number):Promise<any>{
    return new Promise((resolve,reject)=>{

      for(let i = 0; i<HEROES.length;i++){
        if(HEROES[i].id === id){
          resolve(HEROES[i]);
        }
      }

      reject("ERROR - HEROE NO ENCONTRADO");
    });
  }

  deleteHeroById(id:number):Promise<any>{
    
    return new Promise((resolve,reject)=>{
      
      //filter retorna todas las ocurrencias que cumplan la condición
      this.HeroesCopia = this.HeroesCopia.filter((heroe)=>{
        return heroe.id !== id;
      });

      resolve(this.HeroesCopia);

    });

  }

}
