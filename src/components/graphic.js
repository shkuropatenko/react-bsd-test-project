import { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

export const Graphic = ({ showLine }) => {
  const n = 10;
  const numFibonacci = [0, 10];
  for (let i = 2; i < n; i++) {
    numFibonacci[i] = numFibonacci[i - 1] + numFibonacci[i - 2];
  }

  const [data] = useState(numFibonacci.slice(0, n));
  const svgRef = useRef();


  useEffect(() => {
    const w = 400;
    const h = 340;
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('background', '#fff')
      .style('margin', '50')
      .style('overflow', 'visible');

    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear()
      .domain([0, h])
      .range([h, 0]);
    const generateScaleLine = d3.line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    const xAxis = d3.axisBottom(xScale)
      .ticks(data.length)
      .tickFormat(i => i + 1);
    const yAxis = d3.axisLeft(yScale)
      .ticks(5);
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${h})`);
    svg.append('g')
      .call(yAxis);

    if (showLine) {
      svg.selectAll('.line')
        .data([data])
        .join('path')
        .attr('d', d => generateScaleLine(d))
        .attr('fill', 'none')
        .attr('stroke', 'black');
    }

  }, [showLine]);

  return <svg ref={svgRef}></svg>;
}