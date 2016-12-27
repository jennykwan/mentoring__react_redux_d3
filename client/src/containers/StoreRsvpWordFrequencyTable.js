import { connect } from 'react-redux';
import SortedMapTable from '../components/SortedMapTable';

const mapStateToProps = (state) => {
  return {
    keyHead: 'Word',
    valueHead: 'Count',
    map: state.get('rsvps').get('topics'),
    valueSortFn: (a, b) => {
      if (a > b)
        return -1;
      else if (a === b)
        return 0;
      else
        return 1;
    }
  };
};

const StoreRsvpWordFrequencyTable = connect(mapStateToProps)(SortedMapTable);

export default StoreRsvpWordFrequencyTable;
