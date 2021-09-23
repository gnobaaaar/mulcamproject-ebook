import React, {Component, useEffect, useState} from 'react';
import {Button, ButtonBase, Grid, Paper, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import SubscribeModal from '../SubscribeModal';
import './BookView.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

function BookView(props) {
  const {articles} = props;
  const [subModalOn, setSubModalOn] = useState(false);
  const UserId = jwtDecode(localStorage.token);

  const change = (e) =>{
    console.log('index' + e.target.value);
    props.setIndexProp(e.target.value);
  };

  return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          {
              // axios 데이터 출력
              Array.isArray(articles) && articles.length ? (articles.map(post => {
                return (
                      <div className='bookContainer' >
                          <Link to={`/Articless/${articles.articleId}`} style={{textDecoration: 'none'}}>
                          <button variant="contained"
                                  style={{height: '140px', backgroundColor: '#6a79cd', color: '#fff', border: 'none', borderRadius: '5px'}}
                                  value={post.articleId}
                                  onClick={change}
                                  >
                              글보기
                          </button>
                          </Link>
                          <div className='bookRoot'>
                                  <Paper className='papers'>
                                      <Grid container spacing={5}>
                                          <Grid item>
                                              <ButtonBase className='image'>
                                                  {/* eslint-disable-next-line max-len */}
                                                  {/* <img className='img' alt={post.articleImg} src={post.articleImg}/> */}
                                              </ButtonBase>
                                          </Grid>
                                          <Grid item xs={12} sm container style={{display: 'flex', alignItems: 'center'}}>
                                              <Grid item xs container direction="row" spacing={2}>
                                                  <Grid item style={{margin: '0px 200px 0px 100px'}}>
                                                      <Typography gutterBottom variant="subtitle1" style={{fontSize: '20px'}}>
                                                          {post.articleTitle}
                                                      </Typography>
                                                      <Typography variant="body2" gutterBottom style={{fontSize: '15  px'}}>
                                                          {post.bookId}
                                                      </Typography>
                                                      <Typography variant="body2" color="textSecondary">
                                                          {post.articleDate}
                                                      </Typography>
                                                  </Grid>
                                                  <Grid item style={{marginRight: '100px'}}>
                                                      <div style={{cursor: 'pointer'}}>
                                                          {post.article_content}
                                                      </div>
                                                  </Grid>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                  </Paper>
                          </div>
                      </div>
                );
              })) : (
                  <div style={{marginTop: '50px'}}>작성된 글이 없습니다</div>
              )
          }
          <div>
              <SubscribeModal
                  show={subModalOn}
                  onHide={() => setSubModalOn(false)}
              />
          </div>
      </div>
  );
}

export default BookView;
