import React, { Component } from 'react';
import Immutable from 'immutable';
import MapTable from './MapTable';

class LimitedSortedMapTable extends Component {
  render() {
    const sortedEntries = this.props.map.entrySeq().sort(this.props.valueSortFn);
    let limitedSortedMap, otherMapEntry;
    if (sortedEntries.size > this.props.limit) {
      limitedSortedMap = Immutable.OrderedMap(sortedEntries.slice(0, this.props.limit));
      otherMapEntry = sortedEntries.slice(this.props.limit).reduce((reduction, value) => {
        return reduction + value[1];
      }, 0);
    }
    else {
      limitedSortedMap = Immutable.OrderedMap(sortedEntries);
      otherMapEntry = 0;
    }
    const map = limitedSortedMap.set('<Other>', otherMapEntry);
    return (
      <MapTable keyHead={this.props.keyHead} valueHead={this.props.valueHead} map={map} />
    );
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
