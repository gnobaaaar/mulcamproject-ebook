import React, {useEffect, useState} from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';

function ListWrite(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://choi1994.iptime.org:8000/api/book/mybooklist/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      );
      setDataList(data);
      console.log(dataList);
    };
    take();
  }, []);

  return (

        <div>
            <div className='' style={{marginTop: '50px'}}>
            <Grid columns={3}>
            {
                dataList ? dataList.map((item) => {
                  return (
                      <Link to={`mypage/ListWrite/${item.bookId}`}>
                                <Card>
                                    <Image src={item.bookImg} wrapped ui={false}/>
                                    <Card.Content>
                                        <Card.Header>{item.bookTitle}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{item.bookWritter}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                          {item.bookPublisher}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                      </Link>
                  );
                })
                  : ''
            }
            </Grid>
            </div>
        </div>
  );
}

export default ListWrite;
