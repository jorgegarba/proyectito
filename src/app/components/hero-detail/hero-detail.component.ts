import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/Hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service'; 

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  public heroe:Hero;

  constructor(private _route:ActivatedRoute,
              private _sHeroService:HeroService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    console.log("id por ruta: " + id);
    
    this._sHeroService.getHeroById(id).then((response:Hero)=>{
      this.heroe = response;
    }).catch((response)=>{
      console.log(`Error ${response}`);
    });
  }

}
