import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class MapTable extends Component {
  render() {
    const rows = this.props.map.map(
      (value, key) =>
        <tr><td>{key}</td><td>{value}</td></tr>
    );
    return (
      <Table bordered hover>
        <thead>
          <tr><th>{this.props.keyHead}</th><th>{this.props.valueHead}</th></tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }
}

MapTable.propTypes = {
  keyHead: React.PropTypes.string,
  valueHead: React.PropTypes.string,
  map: React.PropTypes.object.isRequired
};

export default MapTable;
