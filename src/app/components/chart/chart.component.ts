import {Component, AfterViewInit, Input} from '@angular/core';
import { Chart, LinearScale, registerables } from 'chart.js';
import {Glycemie} from "../../../model/glycemie";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  standalone: true,
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @Input() glycemies!: Glycemie[];
  constructor() {
    Chart.register(...registerables);
    Chart.register(LinearScale);
  }

  ngAfterViewInit() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.glycemies.map(g => g.date), // Assurez-vous que 'glycemies' a une propriété 'date'
        datasets: [{
          label: 'Glycemie values',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: this.glycemies.map(g => g.value), // Assurez-vous que 'glycemies' a une propriété 'level'
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    });
  }
}
