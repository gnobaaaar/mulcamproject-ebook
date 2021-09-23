import React, {useEffect, useState} from 'react';
import {Grid, ButtonBase, Typography, Paper, Button} from '@material-ui/core';
import './Books.css';
import {Link, Route} from 'react-router-dom';
import SubscribeModal from './SubscribeModal';
import axios from 'axios';

function Books(props) {
  const [articleId, setArticleId] = useState('1');

  const [subModalOn, setSubModalOn] = useState(false);
  // 데이터 id 값 state
  const [indexId, setIndexId] = useState(0);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://choi1994.iptime.org:8000/api/book/article/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      );
      setDataList(data);
    };
    take();
  }, []);

  const renderBooks = dataList.map((post) => {
    // 임시 state
    return (
            <div className="container">
                <Button variant="contained" color="primary"
                        style={{height: '140px', marginTop: '40px', backgroundColor: '#BF8450'}}
                        onClick={() => setSubModalOn(true)}>
                    수강신청
                </Button>
                <div className='root'>
                    <Link to={{
                      pathname: `/Article/${post.article_id}`,
                      state: {
                        id: `${post.article_id}`,
                        bookId: `${post.book_id}`,
                      }
                    }} style={{textDecoration: 'none'}}>
                        <Paper className='papers'>
                            <Grid container spacing={5}>
                                <Grid item>
                                    <ButtonBase className='image'>
                                        <img className='img' alt={post.article_img} src={post.article_img}/>
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container style={{display: 'flex', alignItems: 'center'}}>
                                    <Grid item xs container direction="row" spacing={2}>
                                        <Grid item style={{margin: '0px 200px 0px 100px'}}>
                                            <Typography gutterBottom variant="subtitle1" style={{fontSize: '20px'}}>
                                                {post.article_title}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom style={{fontSize: '15  px'}}>
                                                {post.article_views}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {post.article_date}
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
                    </Link>
                </div>
            </div>
    );
  });
  return (
        <div>
            <SubscribeModal
                show={subModalOn}
                onHide={() => setSubModalOn(false)}
            />
            {renderBooks}
        </div>
  );
}

export default Books;
