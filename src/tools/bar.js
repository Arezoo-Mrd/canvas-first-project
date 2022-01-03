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

"use strickt";
export function BarChart(targetId, width, height, data) {
    let chart = this;

    // Specify Configurations
    chart.configureChart(targetId, width, height, data);

    // pre Opeations
    chart.performPreOperations();

    // Draw Chart
    chart.drawChart();
    console.log("arezoo : ", chart);
}

BarChart.prototype.configureChart = function (targetId, width, height, data) {
    let chart = this;

    // Global Canvas Specifications
    chart.setCanvasParameters(targetId, width, height, data);

    // Global Chart Specifications
    chart.setChartParameters(targetId, width, height, data);
};

BarChart.prototype.setCanvasParameters = function (
    targetId,
    width,
    height,
    data
) {
    let chart = this;

    chart.id = targetId;
    chart.width = width;
    chart.height = height;
    chart.data = data;
};

BarChart.prototype.setChartParameters = function () {
    let chart = this;
    // chart specifications

    //Axis Configurations
    chart.axisRatio = 10;
    chart.verticalMargin = (chart.height * chart.axisRatio) / 100;
    chart.horizontalMargin = (chart.width * chart.axisRatio) / 100;
    chart.axisColor = "#b1b1b1";
    chart.axisWidth = 0.75;

    // Label Configurations
    chart.fontRatio = 3;
    chart.fontFamily = "times";
    chart.fontWeight = "300";
    chart.fontColor = "#666";
    chart.verticalFontSize = (chart.height * chart.fontRatio) / 100;
    chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;

    // GuideLine Configurations
    chart.guideLineColor = "#e5e5e5";
    chart.guideLineWidth = 0.5;
};

BarChart.prototype.performPreOperations = function () {
    let chart = this;

    // Create Canvas
    chart.createCanvas();

    // Get Data
    chart.handleData();
};

BarChart.prototype.createCanvas = function () {
    let chart = this;
    // Create Canvas
    let canvas = document.createElement("canvas");
    canvas.id = chart.id + "-" + Math.random();
    canvas.width = chart.width;
    canvas.height = chart.height;

    // Append canvas to target container
    document.getElementById(chart.id).innerHTML = ""; //clean container
    document.getElementById(chart.id).appendChild(canvas);

    // Add Canvas to chart object

    chart.canvas = canvas;
    chart.context = canvas.getContext("2d");
};

BarChart.prototype.handleData = function () {
    let chart = this;

    chart.labels = [];
    chart.values = [];

    chart.data.forEach((item) => {
        chart.labels.push(item.label);
        chart.values.push(item.value);
    });
};

BarChart.prototype.preapareData = function () {
    // Base
    var chart = this;

    // Global Variables
    chart.itemsNum = chart.data.length;
    chart.maxValue = Math.max.apply(null, chart.values);
    chart.minValue = Math.min.apply(null, chart.values);

    // Axis Specifications
    chart.verticalAxisWidth = chart.height - 2 * chart.verticalMargin; // bottom and top margins
    chart.horizontalAxisWidth = chart.width - 2 * chart.horizontalMargin; // left and right margins

    // Label Specifications
    chart.verticalUpperBound = Math.ceil(chart.maxValue / 10) * 10;
    chart.verticalLabelFreq = chart.verticalUpperBound / chart.itemsNum;
    chart.horizontalLabelFreq = chart.horizontalAxisWidth / chart.itemsNum;
};

BarChart.prototype.drawChart = function () {
    // Base
    let chart = this;

    // Vertical Axis
    chart.drawVerticalAxis();

    // Vertcal Labels
    chart.drawVerticalLabels();

    // Horizontal Axis
    chart.drawHorizontalAxis();
};


BarChart.prototype.drawVerticalAxis = function () {
     // Base
     let chart = this;

    //  Vertical Axis 
    chart.context.beginPath();
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.verticalMargin)
    chart.context.lineTo(chart.horizontalMargin, chart.height - chart.verticalMargin)
    chart.context.stroke()
}

BarChart.prototype.drawVerticalLabels = function () {
    let chart = this;
    // Text Specifications
    let labelFont = chart.fontStyle + ' ' + chart.fontWeight + ' ' + chart.verticalFontSize + 'px' + chart.fontFamily;
    chart.context.font = labelFont;
    chart.context.fillStyle = chart.fontColor;

    // Draw Labels
    for(let i = 0; i<= chart.itemsNum; i++){
        let labelText = chart.vertticalUpper

    }




}

BarChart.prototype.drawHorizontalAxis = function () {
      // Base
      let chart = this;

      //  Horizontal Axis 
      chart.context.beginPath();
      chart.context.strokeStyle = chart.axisColor;
      chart.context.lineWidth = chart.axisWidth;
      chart.context.moveTo(chart.horizontalMargin,chart.height - chart.verticalMargin)
      chart.context.lineTo(chart.width - chart.horizontalMargin, chart.height - chart.verticalMargin)
      chart.context.stroke()
}