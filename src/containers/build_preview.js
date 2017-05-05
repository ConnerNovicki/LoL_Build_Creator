import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeItemFromCurrentBuild } from '../actions/index';

class BuildPreview extends Component {

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderChamp() {
    if (_.isEmpty(this.props.currentBuildChamp)) return <div></div>;
    const champ = this.props.currentBuildChamp;
    const name = champ.name;
    const url = champ.imgUrl;
    return (
      <img src={url} alt={name} />
    )
  }

  renderItem(item, index) {
    const name = item.name;
    const url = item.imgUrl;
    const key = item.id;
    return (
      <img
        src={url}
        alt={name}
        key={key}
        onClick={() => this.props.removeItemFromCurrentBuild(index)}/>
    )
  }

  render() {
    return (
      <div>
        {this.renderChamp()}
        {this.props.currentBuildItems.map(this.renderItem)}
      </div>
    );
  }
}

function mapStateToProps({ builds }) {
  return {
    currentBuildChamp: builds.currentBuild.champion,
    currentBuildItems: builds.currentBuild.items
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeItemFromCurrentBuild
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildPreview);
