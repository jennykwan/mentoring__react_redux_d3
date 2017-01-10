import { connect } from 'react-redux';
import Map from '../components/Map';

const mapStateToProps = (state) => {
  return {
    points: state.getIn(['rsvps', 'locations'])
  };
};

const RsvpsMap = connect(mapStateToProps)(Map);

export default RsvpsMap;
