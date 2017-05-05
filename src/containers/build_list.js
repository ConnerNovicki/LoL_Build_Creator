import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentActiveBuild } from '../actions/index';
import '../../style/build_list.css';

class BuildList extends Component {
  constructor(props) {
    super(props);

    this.renderBuild = this.renderBuild.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    const itemName = item.name;
    const itemUrl = item.imgUrl;
    const itemKey = item.id;
    return (
      <div className="item-div" key={itemKey}>
        <img
          src={itemUrl}
          alt={itemName} />
      </div>
    );
  }

  renderBuild(build) {
    const champName = build.champion.name;
    const champUrl = build.champion.imgUrl;
    const champKey = build.champion.id;
    return (
      <tr key={champKey} onClick={() => this.props.setCurrentActiveBuild(build)}>
        <td>
          <img
            src={champUrl}
            alt={champName} />
          {build.items.map(this.renderItem)}
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr><td><h1>Saved Builds:</h1></td></tr>
          </thead>
          <tbody>
            {this.props.builds.map(this.renderBuild)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ builds }) {
  return { builds: builds.builds };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setCurrentActiveBuild
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildList);
