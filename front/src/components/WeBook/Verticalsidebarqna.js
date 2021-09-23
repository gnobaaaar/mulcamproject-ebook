import {Menu, Sidebar} from 'semantic-ui-react';
import './VerticalSidebar.css';
import React from 'react';

const Verticalsidebarqna = ({ animation, direction, visible}) => (
    <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='wide'
    >
        <Menu>
            3
        </Menu>
    </Sidebar>
);

// export default Verticalsidebarqna;
