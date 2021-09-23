import React, { useEffect, useState } from 'react';
import './Post.css';

const postList = [
  {
    no: 1,
    title: '첫번째 게시글입니다.',
    content: '첫번째 게시글 내용입니다.',
    createDate: '2021-04-09'
  },
  {
    no: 2,
    title: '두번째 게시글입니다.',
    content: '두번째 게시글 내용입니다.',
    createDate: '2021-04-09',
    category: 1
  },
  {
    no: 3,
    title: '세번째 게시글입니다.',
    content: '세번째 게시글 내용입니다.',
    createDate: '2021-04-09',
    category: 2
  },
];

const getPostByNo = no => {
  const array = postList.filter(x => x.no === no);
  console.log(postList.no);
  if (array.length === 1) {
    return array[0];
  }
  return null;
};

const ViewCommunication = ({ history, location, match }) => {
  const [data, setData] = useState({});

  const { no } = match.params;

  useEffect(() => {
    setData(getPostByNo(no));
  }, []);

  return (
          <div>
              <h2 align="center">게시글 상세정보</h2>

              <div className="post-view-wrapper">
                  {
                      data ? (
                          <div>
                              <div className="post-view-row">
                                  <label>게시글 번호</label>
                                  <label>{ data.no }</label>
                              </div>
                              <div className="post-view-row">
                                  <label>제목</label>
                                  <label>{ data.title }</label>
                              </div>
                              <div className="post-view-row">
                                  <label>작성일</label>
                                  <label>{ data.createDate }</label>
                              </div>
                              <div className="post-view-row">
                                  <label>내용</label>
                                  <div>
                                      {
                                          data.content
                                      }
                                  </div>
                              </div>
                          </div>
                      ) : '해당 게시글을 찾을 수 없습니다.'
                  }
                  <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
              </div>
          </div>
  );
};

export default ViewCommunication;
