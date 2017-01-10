import { connect } from 'react-redux';
import Map from '../components/Map';

const mapStateToProps = (state) => {
  return {
    // points: ?
  };
};

const RsvpsMap = connect(mapStateToProps)(Map);

export default RsvpsMap;
