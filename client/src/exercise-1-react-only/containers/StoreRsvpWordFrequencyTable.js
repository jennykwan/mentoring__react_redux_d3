import { connect } from 'react-redux';
import LimitedSortedMapTable from '../components/LimitedSortedMapTable';

const mapStateToProps = (state) => {
  return {
    keyHead: 'Word',
    valueHead: 'Count',
    // map: ?,
    // valueSortFn: ?,
    limit: 10
  };
};

const StoreRsvpWordFrequencyTable = connect(mapStateToProps)(LimitedSortedMapTable);

export default StoreRsvpWordFrequencyTable;
