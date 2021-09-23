import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function ListCourseReview(props) {
  return (
        <div>
          <Card>
            <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
              <Link to='/mypage/Review'><Button style={{marginLeft: '130px'}}basic color='yellow'>
                수강평 보기
              </Button></Link>
            </Card.Content>
          </Card>
        </div>
  );
}

export default ListCourseReview;
