import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import CommunityListView from '../view/CommunityListView';

@inject('CommunityStore')
@observer
class ListCommunication extends Component {
  componentDidMount() {
    this.props.CommunityStore.selectAll();
  }

  onSetCommunityProp = (name, value) => {
    this.props.CommunityStore.setCommunityProp(name, value);
  };

  onAddCommunity = () => {
    this.props.CommunityStore.addCommunity();
  };

  onRemoveCommunity = () => {
    this.props.CommunityStore.removeCommunity();
  };

  onModifyCommunity = () => {
    this.props.CommunityStore.modifyCommunity();
  };

  render() {
    const { communities } = this.props.CommunityStore;
    return (
      <div>
        <CommunityListView
          communities={communities}
          onSetCommunityProp={this.onSetCommunityProp}
          onAddCommunity={this.onAddCommunity}
          onRemoveCommunity={this.onRemoveCommunity}
          onModifyCommunity={this.onModifyCommunity}
        />
      </div>
    );
  }
}

export default ListCommunication;
