import React, {useEffect, useState} from 'react';
import {Button, Card, Grid, Icon, Image} from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function ListCourse(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://choi1994.iptime.org:8000/api/book/signbook/',
        { headers:
                {
                  Authorization: `JWT ${localStorage.getItem('token')}`,
                }
        });
      setDataList(data);
      console.log(dataList);
    };
    take();
  }, []);

  return (
      <div>

          { console.log(dataList) }
          <div className=''>
              <Grid columns={3}>
                  {
                      dataList ? dataList.map((item) => {
                        return (
                          <Link to={`mypage/ListWrite/${item.bookId}`}>
                              <Card>
                                  <Image src='/images/avatar/large/matthew.png' wrapped ui={false}/>
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
                        : '등록된 수강신청 항목이 존재하지 않습니다.'
                  }
              </Grid>
          </div>
      </div>
  );
}

export default ListCourse;
