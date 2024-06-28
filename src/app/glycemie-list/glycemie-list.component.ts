import { Component, OnInit } from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import { CommonModule } from '@angular/common';
import { GlycemieService } from '../glycemie-service.service';
import { Glycemie } from '../../model/glycemie';

@Component({
  selector: 'app-glycemie-list',
  templateUrl: './glycemie-list.component.html',
  styleUrl: './glycemie-list.component.css',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink]
})
export class GlycemieListComponent  implements OnInit{
  glycemies :Glycemie[] = [];

  constructor(private glycemieService : GlycemieService) {}

  ngOnInit() {
    this.glycemieService.findAll().subscribe(data =>
    {
      this.glycemies = data;
    });
  }

  deleteGlycemie(id: number) {
    this.glycemieService.deleteGlycemie(id).subscribe( () => {
      this.glycemies = this.glycemies.filter(glycemie => glycemie.id !== id);
    });
  }
}
