import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './MainBook.css';

function MainBook(props) {
  const [dataList, setDataList] = useState([]);
  let memoContent;

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    sub: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '10px',
      marginTop: '10px'
    },
    img: {
      borderRadius: '6px'
    },
    title: {
      fontWeight: 'bold'
    }
  });

  const classes = useStyles();

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://choi1994.iptime.org:8000/api/book/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      );
      setDataList(data);
    };
    take();
  }, []);

  // eslint-disable-next-line array-callback-return
  const doc = dataList.map((post) => {
    return (
        <div className='subBox'>
              <Card className={classes.root}>
                <CardActionArea className={classes.sub}>
                  <img className={classes.img} src={post.bookImg} alt=""/>
                  <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                      {post.bookTitle}
                    </Typography>
                    {post.bookWritter}
                    {/* {post.bookIntro} */}
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={{
                    pathname: '/List/',
                    state: {
                      bookId: post.bookId
                    }
                  }} style={{textDecoration: 'none'}}>
                    {/* 메모가 있으면 콘솔에 date 출력, 없으면 생성 */}
                    <Button onClick={()=>{
                      axios.get(`http://choi1994.iptime.org:8000/api/memo/myMemo/${post.bookId}/`, {
                        headers: {
                          Authorization: `JWT ${localStorage.getItem('token')}`
                        }
                      }).then((response)=>{
                        if (response.data.memoDate) {
                          console.log('메모가 존재합니다');
                        }
                      }).catch((response)=>{
                        console.log(response);
                        axios.post('http://choi1994.iptime.org:8000/api/memo/create/', {
                          data: {
                            bookId: post.bookId
                          }
                        }, {
                          headers: {
                            Authorization: `JWT ${localStorage.getItem('token')}`
                          }
                        });
                        console.log('메모가 새로 생성되었습니다 +' + post.bookId);
                        alert('새로운 메모가 생성되었습니다');
                      });
                    }}>
                    책 목록 보기
                    </Button>
                  </Link>
                </CardActions>
              </Card>

        </div>
    );
  });

  return (
        <div>
          { dataList && localStorage.token
            ? (
                <div>
                <div className='MainBox'>
                  {doc}
                </div>
                </div>
            )
            : (
                  <div style={{marginTop: '40px', textAlign: 'center'}}>
                    로그인이 필요합니다
                  </div>
            )}
        </div>
  );
}

export default MainBook;
