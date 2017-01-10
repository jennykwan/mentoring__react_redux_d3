import React, { Component } from 'react';
import Immutable from 'immutable';
import MapTable from './MapTable';

class LimitedSortedMapTable extends Component {
  render() {
    /*
    1. Where do we get the `map`?
    2. How do we calculate the top `limit` entries in the map?
    3. How do we add an entry for the `<Other>` bucket?

    return (
      <MapTable keyHead={this.props.keyHead} valueHead={this.props.valueHead} map={?} />
    );
    */
    return null;
  }
}

LimitedSortedMapTable.propTypes = {
  keyHead: React.PropTypes.string,
  valueHead: React.PropTypes.string,
  map: React.PropTypes.object.isRequired,
  valueSortFn: React.PropTypes.func.isRequired,
  limit: React.PropTypes.number.isRequired
};

export default LimitedSortedMapTable;
