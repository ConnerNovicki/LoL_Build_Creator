import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurrentActiveBuild, removeBuildFromList } from '../actions/index';
import '../../style/build_list.css';

import BuildListItem from '../components/build_list_item';

class BuildList extends Component {
  constructor(props) {
    super(props);

    this.renderBuild = this.renderBuild.bind(this);
  }

  renderBuild(build) {
    const names = build.items.map((item) => item.name);
    names.join(' + ');
    const key = build.champion.id + names;

    return <BuildListItem
            build={build}
            setCurrentActiveBuild={this.props.setCurrentActiveBuild}
            removeBuildFromList={this.props.removeBuildFromList}
            key={key} />;
  }

  render() {
    if (this.props.builds.length === 0) return <div></div>;

    return (
      <div>

      <div className="table-div">
        <h1>Saved Builds:</h1>
        <table className="table table-hover col-md-8">
          <thead className="table-headers">
            <tr>
              <td>Chamion</td>
              <td>Items</td>
            </tr>
          </thead>
          <tbody>
            {this.props.builds.map(this.renderBuild)}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

function mapStateToProps({ builds }) {
  return { builds: builds.builds };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setCurrentActiveBuild,
    removeBuildFromList
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildList);
