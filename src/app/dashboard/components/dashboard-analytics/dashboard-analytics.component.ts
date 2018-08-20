import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.css']
})
export class DashboardAnalyticsComponent implements OnInit {

  drawValue:boolean = false;

  constructor(){ 
        google.charts.load("current", {packages:["corechart"]});  
        google.charts.load('current', {'packages':['bar']}); 
  }

  ngOnInit() {
    this.chartDrawBtnClick();
  }

  chartDrawBtnClick(){
    this.drawValue = true;
    google.charts.setOnLoadCallback(this.drawChart);
    google.charts.setOnLoadCallback(this.drawChart_2); 
  }
    drawChart() {         
        let data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'], 
            ['Work', 2], 
            ['Eat', 2], 
            ['Commute',  3], 
            ['Watch TV', 3], 
            ['Sleep', 5]
         ]);         
        let options = { title: 'My Daily Activities', pieHole: 0.3 };         
        let chart = new google.visualization.PieChart(document.getElementById('donutchart'));         
        chart.draw(data, options);       
      }

      drawChart_2() {
        let data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2004',  1000,      400, 300],
          ['2005',  1170,      460, 400],
          ['2006',  660,       1120, 500],
          ['2007',  1030,      540, 1200],
          ['2008',  1000,      1240, 200],
          ['2009',  1200,      940, 456],
          ['2010',  1030,      540, 345]
        ]);

        let options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };


        let options2 = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        let chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
        let chart2 = new google.charts.Bar(document.getElementById('curve_chart2'));

        chart.draw(data, options);
        chart2.draw(data, options2);
      }

}
