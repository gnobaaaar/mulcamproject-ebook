import {Menu, Sidebar} from 'semantic-ui-react';
import React, {useContext, useState} from 'react';
import './VerticalSidebar.css';
import MenuDetail from './MenuDetail';
import LangContext from './LangContext';

function Verticalsidebarmenu(props) {
  return (
    <Sidebar
        as={Menu}
        animation={props.animation}
        direction={props.direction}
        icon='labeled'
        inverted
        vertical
        visible={props.visible}
        width='wide'
    >
            <Menu>
                <MenuDetail id={props.bookId} setArticleId={props.setArticleId}/>
            </Menu>
    </Sidebar>
  );
}

// export default Verticalsidebarmenu;
