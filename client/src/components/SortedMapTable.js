import React, { Component } from 'react';
import Immutable from 'immutable';
import MapTable from './MapTable';

class SortedMapTable extends Component {
  render() {
    const sortedMap = Immutable.OrderedMap(this.props.map.sort(this.props.valueSortFn));
    return (
      <MapTable keyHead={this.props.keyHead} valueHead={this.props.valueHead} map={sortedMap} />
    );
  }
}

SortedMapTable.propTypes = {
  keyHead: React.PropTypes.string,
  valueHead: React.PropTypes.string,
  map: React.PropTypes.object.isRequired,
  valueSortFn: React.PropTypes.func.isRequired
};

export default SortedMapTable;
