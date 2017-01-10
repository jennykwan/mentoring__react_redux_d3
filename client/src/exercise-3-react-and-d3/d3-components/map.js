import * as d3 from 'd3';
import * as d3GeoProjection from 'd3-geo-projection';
import * as topojson from 'topojson';

import world110m2 from '../world-110m2.json';

export default (root, points) => {
  const svg = d3.select(root);
  svg.attr('width', '1080px').attr('height', '720px');

  const projection = d3GeoProjection.geoEckert4().scale(175).translate([540, 360]).precision(0.1);
  const path = d3.geoPath(projection);

  const graticuleG = svg.append('g');
  graticuleG.append('path').datum(d3.geoGraticule())
    .attr('fill', 'none')
    .attr('stroke', '#777')
    .attr('stroke-width', '.5px')
    .attr('stroke-opacity', '.5')
    .attr('d', path);

  const topoG = svg.append('g');
  topoG.selectAll('path')
    .data(topojson.feature(world110m2, world110m2.objects.countries).features)
    .enter()
    .append('path')
    .attr('fill', 'black')
    .attr('stroke', 'white')
    .attr('stroke-width', '1px')
    .attr('d', path);

  const pointsG = svg.append('g');
  pointsG.selectAll('circle')
    .data(points.toArray())
    .enter()
    .append('circle')
    .attr('cx', (element) => { return projection(element)[0]; })
    .attr('cy', (element) => { return projection(element)[1]; })
    .attr('r', '8px')
    .attr('fill', 'red');
};
