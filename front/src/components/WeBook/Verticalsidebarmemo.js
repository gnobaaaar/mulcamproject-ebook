import {Menu, Sidebar} from 'semantic-ui-react';
import React from 'react';
import Editor from '../Markdown/Editor';
import './VerticalSidebar.css';

const Verticalsidebarmemo = ({ animation, direction, visible}) => (
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
            <div className="sidecontainer">
                <Editor />
            </div>
        </Menu>
    </Sidebar>
);

// export default Verticalsidebarmemo;
