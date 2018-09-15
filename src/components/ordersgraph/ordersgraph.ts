import { Component,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
/**
 * Generated class for the OrdersgraphComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ordersgraph',
  templateUrl: 'ordersgraph.html'
})
export class OrdersgraphComponent {
  @ViewChild('barCanvas') barCanvas;
  text: 300;
  barChart: any;
  constructor() {
 
  }

  ionViewDidLoad() {

      this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'bar',
          data: {
              labels: ["Cash", "Online", "Online COD"],
              datasets: [{
                  label: 'Rupees',
                  data: [12, 19, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }

      });
    }
}
