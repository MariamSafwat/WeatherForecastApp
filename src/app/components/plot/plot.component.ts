import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3'

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  data=[
    {
      "value": 20,
      "date": "2020-05-12T12:19:00+00:00"
    },
    {
      "value": 50,
      "date": "2020-05-14T12:19:00+00:00"
    },
    {
      "value": 30,
      "date": "2020-05-16T12:19:00+00:00"
    },
    {
      "value": 80,
      "date": "2020-05-18T12:19:00+00:00"
    },
    {
      "value": 55,
      "date": "2020-05-20T12:19:00+00:00"
    },
    {
      "value": 60,
      "date": "2020-05-22T12:19:00+00:00"
    },
    {
      "value": 45,
      "date": "2020-05-24T12:19:00+00:00"
    }
  ]

  private width = 700;
  private height = 700;
  private margin = 50;

  public svg:any;
  public svgInner:any;
  public yScale:any;
  public xScale:any;
  public xAxis:any;
  public yAxis:any;
  public lineGroup:any;

  constructor(public chartElem: ElementRef) { }

  ngOnInit(): void {
    this.initializeChart();
    this.drawChart();
  }

  private initializeChart(): void {
    this.svg = d3
      .select(this.chartElem.nativeElement)
      .select('.linechart')
      .append('svg')
      .attr('height', this.height);
    this.svgInner = this.svg
      .append('g')
      .style('transform', 'translate(' + this.margin + 'px, ' + this.margin + 'px)');

    this.yScale = d3
      .scaleLinear()
      
      .range([0, this.height - 2 * this.margin]);

    this.yAxis = this.svgInner
      .append('g')
      .attr('id', 'y-axis')
      .style('transform', 'translate(' + this.margin + 'px,  0)');

    this.xScale = d3.scaleTime()

    this.xAxis = this.svgInner
      .append('g')
      .attr('id', 'x-axis')
      .style('transform', 'translate(0, ' + (this.height - 2 * this.margin) + 'px)');

    this.lineGroup = this.svgInner
      .append('g')
      .append('path')
      .attr('id', 'line')
      .style('fill', 'none')
      .style('stroke', 'red')
      .style('stroke-width', '2px')
  }

  private drawChart(): void {
    this.width = this.chartElem.nativeElement.getBoundingClientRect().width;
    this.svg.attr('width', this.width);

    this.xScale.range([this.margin, this.width - 2 * this.margin]);

    const xAxis = d3
      .axisBottom(this.xScale)
      .ticks(10)
      

    this.xAxis.call(xAxis);

    const yAxis = d3
      .axisLeft(this.yScale);

    this.yAxis.call(yAxis);

    const line = d3
      .line()
      .x(d => d[0])
      .y(d => d[1])
      .curve(d3.curveMonotoneX);

    const points: [number, number][] = this.data.map(d => [
      this.xScale(new Date(d.date)),
      this.yScale(d.value),
    ]);

    this.lineGroup.attr('d', line(points));
  }

}
