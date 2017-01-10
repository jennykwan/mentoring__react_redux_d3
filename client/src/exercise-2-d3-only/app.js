import * as d3 from 'd3';

import store from './services/store';

export default (rootId) => {

  const root = d3.select(rootId);

  root
    .append('div').classed('row', true)
    .append('div').classed('col-xs-12', true)
    .append('h1').text('D3-Only');

  const table = root
    .append('div').classed('row', true)
    .append('div').classed('col-xs-12', true)
    .append('table').attr('id', `${rootId}-table`).classed('table', true).classed('table-bordered', true).classed('table-hover', true);

  const tableHeaderRow = table
    .append('thead')
    .append('tr');
  tableHeaderRow.append('th').text('Word');
  tableHeaderRow.append('th').text('Count');

  const tableBody = table
    .append('tbody');

  store((data) => {
    /*
    `data` is an Immutable.Map with the word/count entries

    1. How do we get the top 10 entries?
    2. How do we calculate the `<Other>` entry?
    3. How do we update the `tableBody`?
    */
  });

};
