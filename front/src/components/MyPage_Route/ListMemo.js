import React, {useEffect, useState} from 'react';
import { List } from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';
import axios from 'axios';

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />;

function ListMemo(props) {
  const [dataList, setDataList] = useState([]);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://choi1994.iptime.org:8000/api/memo/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      });
      setDataList(data);
    };
    take();
  }, []);

  return (
        <div>
            {console.log(dataList)}
            {
                dataList ? dataList.map((item) => {
                  return (
                      <List>
                          <List.Icon name='marker' />
                            <Link to={{
                              pathname: `/mypage/MemoDetail/${item.memoId}`,
                              state: {
                                memoId: item.memoId
                              }
                            }}>
                            {/* <List.Header as='a'>{item.memoTitle}</List.Header> */}
                              <button onClick={()=>{

                              }}>{item.bookId}</button>
                        </Link>
                      </List>
                  );
                }) : <>'현재 등록된 메모가 없습니다.'</>
            }
        </div>
  );
}
export default ListMemo;
