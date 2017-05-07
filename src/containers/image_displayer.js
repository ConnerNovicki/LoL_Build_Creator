import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchChampData, fetchItemData, setCurrentBuildChamp, addItemToCurrentBuild } from '../actions/index';
import { CHAMPION_FILTER, ITEM_FILTER, NO_FILTER } from '../actions/visibility_filters';
import '../../style/image_displayer.css';

class ImageDisplayer extends Component {
  constructor(props) {
    super(props);

    this.renderImage = this.renderImage.bind(this);

    // Initially fetch champ and item data from api and store in state
    this.props.fetchChampData();
    this.props.fetchItemData();
  }

  renderImage(data, imageSelectFunc) {
    const key = data.id;
    const name = data.name;
    const imgURL = data.imgUrl;

    return (
      <div key={key} className="data-div">
        <img
          src={imgURL}
          alt={name}
          className="data-img"
          onClick={imageSelectFunc} />
      </div>
    );
  }

  renderImages() {
    if (this.props.visibilityFilter === NO_FILTER) {
      return <div></div>;
    }
    else if (this.props.visibilityFilter === CHAMPION_FILTER) {
      return this.props.champData.map((champ) =>
        this.renderImage(champ, () => this.props.setCurrentBuildChamp(champ))
      );
    }
    else if (this.props.visibilityFilter === ITEM_FILTER) {
      return this.props.itemData.map((item) =>
        this.renderImage(item, () => this.props.addItemToCurrentBuild(item))
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderImages()}
      </div>
    );
  }
}

function mapStateToProps({ champData, itemData, visibilityFilter }) {
  return { champData, itemData, visibilityFilter };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchChampData,
    fetchItemData,
    setCurrentBuildChamp,
    addItemToCurrentBuild
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplayer);
