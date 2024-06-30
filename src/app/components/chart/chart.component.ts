/*
import { Component, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, LinearScale, registerables, ChartTypeRegistry } from 'chart.js';
import { Glycemie } from '../../../model/glycemie';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  standalone: true,
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit, OnChanges {
  @Input() glycemies: Glycemie[] = [];
  private chartInstance: Chart<'line'> | undefined;

  constructor() {
    Chart.register(...registerables);
    Chart.register(LinearScale);

    // Initialize chartInstance
    this.chartInstance = undefined;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['glycemies'] && !changes['glycemies'].firstChange) {
      this.updateChart();
    }
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
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.glycemies.map(g => g.date),
        datasets: [{
          label: 'Valeurs de glycémie',
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
*/

import { Component, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, LinearScale, registerables } from 'chart.js';
import { Glycemie } from '../../../model/glycemie';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  standalone: true,
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit, OnChanges {
  @Input() glycemies: Glycemie[] = [];
  private chartInstance: Chart<'bar'> | undefined;

  constructor() {
    Chart.register(...registerables);
    Chart.register(LinearScale);

    // Initialize chartInstance
    this.chartInstance = undefined;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['glycemies'] && !changes['glycemies'].firstChange) {
      this.updateChart();
    }
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
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx, {
      type: 'bar', // Utilisation du type de graphique 'bar' pour les colonnes individuelles
      data: {
        labels: this.glycemies.map(g => g.date.toISOString()), // Utilisation de la date pour les labels
        datasets: [{
          label: 'Valeurs de glycémie',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: this.glycemies.map(g => g.value), // Utilisation de la valeur de glycémie pour les données
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true // Commence à zéro sur l'axe y
          }
        }
      }
    });
  }
}
