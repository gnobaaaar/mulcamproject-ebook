import React from 'react';
import CommunityHeader from './CommunityHeader';
import ListCommunication from '../container/ListCommunication';

function CommunityPage(props) {
  return (
        <div>
            <CommunityHeader/>
            <ListCommunication />
        </div>
  );
}

export default CommunityPage;
