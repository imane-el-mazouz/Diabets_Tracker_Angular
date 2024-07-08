import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import { CommonModule } from '@angular/common';
import { GlycemieService } from '../glycemie-service.service';
import { Glycemie } from '../../model/glycemie';
import {ChartComponent} from "../components/chart/chart.component";
import {FormsModule} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-glycemie-list',
  templateUrl: './glycemie-list.component.html',
  styleUrl: './glycemie-list.component.css',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ChartComponent ,FormsModule]
})
export class GlycemieListComponent  implements OnInit{
  name : string = "hhh";
  glycemies :Glycemie[] = [];

  constructor(private glycemieService : GlycemieService) {}

  ngOnInit() {
    this.glycemieService.findAll().subscribe(data => {
      this.glycemies = data.map(item => ({
        ...item,
        date: new Date(item.date)
      }));
      console.log(this.glycemies);
    });
  }

  deleteGlycemie(id: number) {
    this.glycemieService.deleteGlycemie(id).subscribe( () => {
      this.glycemies = this.glycemies.filter(glycemie => glycemie.id !== id);
    });
  }


  updateGlycemie(id: number, glycemie: Glycemie) {
    this.glycemieService.updateGlycemie(id, glycemie).subscribe(() => {
      this.glycemies = this.glycemies.map(g => g.id === id ? glycemie : g);
    });
  }

}
