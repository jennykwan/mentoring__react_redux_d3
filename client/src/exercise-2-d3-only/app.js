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
    .append('table').attr('id', `${rootId}-table`).classed('table', true).classed('table-bordered', true);

  const tableHeaderRow = table
    .append('thead')
    .append('tr');
  tableHeaderRow.append('th').text('Word');
  tableHeaderRow.append('th').text('Count');

  const tableBody = table
    .append('tbody');

  store((data) => {
    const rawData = data.entrySeq().toArray().sort((x, y) => {
      return (y[1] - x[1]) ? (y[1] - x[1]) : d3.ascending(x[0], y[0]);
    });

    const limitedData = rawData.slice(0, 10);
    limitedData.push(["<Other>", rawData.slice(10).reduce((accumulator, currentValue) => { return accumulator + currentValue[1]; }, 0)]);

    const tableBodyData = tableBody
      .selectAll('tr').data(limitedData, (element) => {
        return element[0];
      });

    tableBodyData.exit().remove();

    const tableBodyDataEnterRows = tableBodyData.enter().append('tr');
    tableBodyDataEnterRows.append('td').classed('key', true).text((element) => { return element[0]; });
    tableBodyDataEnterRows.append('td').classed('value', true);

    const tableBodyDataCurrentRows = tableBodyDataEnterRows.merge(tableBodyData);
    tableBodyDataCurrentRows.select('.value').text((element) => { return element[1]; });

    tableBodyDataCurrentRows.order();
  });

};
