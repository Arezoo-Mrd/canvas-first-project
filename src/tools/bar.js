/**
 * 
 * bar.js
 * simple, elegant bar chart library
 * {data} -version 1.0
 * {url} 
 * 
 * 
 * Copyright 2021 by Arezoo Moradi
 * {Licence url}
 *  
 */

'use strickt'
export function BarChart( targetId, width , height, data) {

    let chart = this;


    // Specify Configurations
    chart.configureChart(targetId, width , height, data)


    // pre Opeations
    chart.performPreOperations();
    console.log("arezoo : ",chart)
}


BarChart.prototype.configureChart = function ( targetId, width , height, data) {
    let chart = this;

   // Global Canvas Specifications
   chart.setCanvasParameters(targetId, width, height, data)


   // Global Chart Specifications 
   chart.setChartParameters(targetId, width, height, data)

 
}

BarChart.prototype.setCanvasParameters = function (targetId, width, height, data) {
   let chart = this;
   
    chart.id = targetId;
    chart.width = width;
    chart.height = height;
    chart.data = data;
}


BarChart.prototype.setChartParameters = function () {

    let chart = this;
       // chart specifications

       chart.axeRatio = 10;
       chart.verticalMargin = (chart.height * chart.axeRatio) / 100;
       chart.horizontalMargin = (chart.width * chart.axeRatio) / 100;
       chart.axeColor = '#b1b1b1';
       chart.axeWidth = 0.75;
   
   
       // Label Configurations
       chart.fontRatio = 3 ;
       chart.fontFamily = 'times';
       chart.fontWeight = '300';
       chart.fontColor = '#666';
       chart.verticalFontSixe  = (chart.height * chart.fontRatio ) / 100
       chart.horizontalFontSixe  = (chart.width * chart.fontRatio ) / 100
   
   
       // GuideLine Configurations 
       chart.guideLineColor = '#e5e5e5';
       chart.guideLineWidth = 0.5;
}

BarChart.prototype.performPreOperations = function () {
    let chart = this;

    // Create Canvas
    chart.createCanvas();

    // Get Data
    chart.handleData()

}


BarChart.prototype.createCanvas = function () {
    let chart = this;
    // Create Canvas 
    let canvas = document.createElement('canvas')
    canvas.id = chart.id + '-' + Math.random();
    canvas.width = chart.width;
    canvas.height = chart.height;


    // Append canvas to target container
    document.getElementById(chart.id).innerHTML = ''; //clean container
    document.getElementById(chart.id).appendChild(canvas)



    // Add Canvas to chart object

    chart.canvas = canvas;
    chart.context = canvas.getContext('2d')

}

BarChart.prototype.handleData = function () {
    let chart = this;

    chart.labels = [];
    chart.values = [];


    chart.data.forEach((item) => {
        chart.labels.push(item.labels)
        chart.values.push(item.value)
    })
}
