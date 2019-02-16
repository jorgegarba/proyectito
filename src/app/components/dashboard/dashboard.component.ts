import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Array<Hero> = [];

  constructor(private _sHeroService:HeroService) { }

  ngOnInit() {
    this._sHeroService.getHeores().then((response)=>{
      this.heroes = response.slice(1,5);
    })
  }

}
