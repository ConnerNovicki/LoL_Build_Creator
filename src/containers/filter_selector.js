import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setVisibilityFilter, saveBuild, clearCurrentBuild, removeAllBuilds } from '../actions/index';
import { CHAMPION_FILTER, ITEM_FILTER, NO_FILTER } from '../actions/visibility_filters';

import '../../style/filter_selector.css';

class FilterSelector extends Component {
  constructor(props) {
    super(props);

    this.clearBuild = this.clearBuild.bind(this);
    this.removeAllBuilds = this.removeAllBuilds.bind(this);
    this.saveBuild = this.saveBuild.bind(this);
  }

  clearBuild() {
    this.props.clearCurrentBuild();
    this.props.setVisibilityFilter(NO_FILTER);
  }

  removeAllBuilds() {
    this.props.removeAllBuilds();
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
      <div className="btn-outer-div">
        <div className="btn-group left-button-group">
          <button type="button" className="btn btn-primary" onClick={() => this.props.setVisibilityFilter(CHAMPION_FILTER)}>Select Champ</button>
          <button type="button" className="btn btn-primary" onClick={() => this.props.setVisibilityFilter(ITEM_FILTER)}>Select Items</button>
        </div>
        <div className="right-button-group">
          <button type="button" className="btn btn-success" onClick={this.saveBuild}>Save</button>
          <button type="button" className="btn btn-success" onClick={this.clearBuild}>Clear Build</button>
          <button type="button" className="btn btn-success" onClick={this.removeAllBuilds}>Remove all</button>
        </div>
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
    clearCurrentBuild,
    removeAllBuilds
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelector);
