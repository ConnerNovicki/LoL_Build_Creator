import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BuildItemList extends Component {

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  editBuild(build) {
    this.props.setCurrentActiveBuild(build);
    this.props.removeBuildFromList(build);
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

  render() {
    const build = this.props.build;
    const champName = build.champion.name;
    const champUrl = build.champion.imgUrl;

    return (
      <tr>
        <td>
          <img
            src={champUrl}
            alt={champName} />
        </td>
        <td>
          {build.items.map(this.renderItem)}
        </td>
        <td>
          <button onClick={() => this.editBuild(build)}>Edit</button>
        </td>
        <td>
          <button onClick={() => this.props.removeBuildFromList(build)}>Delete</button>
        </td>
      </tr>
    );
  }
}

BuildItemList.propTypes = {
  build: PropTypes.shape({
    champion: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }),
    items: PropTypes.array.isRequired
  }),
  setCurrentActiveBuild: PropTypes.func.isRequired,
  removeBuildFromList: PropTypes.func.isRequired
}

export default BuildItemList;
