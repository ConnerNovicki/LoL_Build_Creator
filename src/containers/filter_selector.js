import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setVisibilityFilter, saveBuild, clearCurrentBuild, CHAMPION_FILTER, ITEM_FILTER, NO_FILTER } from '../actions/index';

class FilterSelector extends Component {
  constructor(props) {
    super(props);

    this.clearBuild = this.clearBuild.bind(this);
    this.saveBuild = this.saveBuild.bind(this);
  }

  clearBuild() {
    this.props.clearCurrentBuild();
    this.props.setVisibilityFilter(NO_FILTER);
  }

  saveBuild() {
    this.props.saveBuild();
    this.props.clearCurrentBuild();
    this.props.setVisibilityFilter(NO_FILTER);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.setVisibilityFilter(CHAMPION_FILTER)}>Select Champ</button>
        <button onClick={() => this.props.setVisibilityFilter(ITEM_FILTER)}>Select Items</button>
        <button onClick={this.saveBuild}>Save</button>
        <button onClick={this.clearBuild}>Clear all</button>
      </div>
    )
  }
}

function mapStateToProps({ visibilityFilter }) {
  return { visibilityFilter };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setVisibilityFilter,
    saveBuild,
    clearCurrentBuild
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelector);
