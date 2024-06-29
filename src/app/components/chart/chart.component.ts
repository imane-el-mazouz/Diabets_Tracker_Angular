import { Component, AfterViewInit, Input } from '@angular/core';
import { Chart, LinearScale, registerables } from 'chart.js';
import { Glycemie } from '../../../model/glycemie';

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
    console.log('ngAfterViewInit called');
    console.log('glycemies:', this.glycemies);
    this.updateChart();
  }

  private updateChart() {
    console.log('Updating chart...');
    console.log('glycemies:', this.glycemies);

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.glycemies.map(g => g.date.toISOString()),
        datasets: [{
          label: 'Glycemie values',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: this.glycemies.map(g => g.value),
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
