import React from 'react';
import { Item } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function MemoList(props) {
  return (
        <div>
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src='/images/wireframe/image.png' />
                    <Item.Content verticalAlign='middle'>
                        <Link to='/mypage/MemoDetail'><Item.Header as='a'>12 Years a Slave</Item.Header></Link>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Image size='tiny' src='/images/wireframe/image.png' />
                    <Item.Content verticalAlign='middle'>
                        <Item.Header as='a' content='My Neighbor Totoro' />
                    </Item.Content>
                </Item>
            </Item.Group>
        </div>
  );
}

export default MemoList;
