import { connect } from 'react-redux';
import LimitedSortedMapTable from '../components/LimitedSortedMapTable';

const mapStateToProps = (state) => {
  return {
    keyHead: 'Word',
    valueHead: 'Count',
    map: state.get('rsvps').get('topics'),
    valueSortFn: (a, b) => {
      if (a[1] > b[1])
        return -1;
      else if (a[1] === b[1]) {
        if (a[0] < b[0])
          return -1;
        else if (a[0] === b[0])
          return 0;
        else
          return 1;
      }
      else
        return 1;
    },
    limit: 10
  };
};

const StoreRsvpWordFrequencyTable = connect(mapStateToProps)(LimitedSortedMapTable);

export default StoreRsvpWordFrequencyTable;
