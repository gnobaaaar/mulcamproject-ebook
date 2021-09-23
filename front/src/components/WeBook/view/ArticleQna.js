import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function ArticleQna(props) {
  const classes = useStyles();
  const bookId = props.bookId;

  // qna data 가져올 예정
  // useEffect(() => {
  //   const take = async () => {
  //     const {data} = await axios.get(`http://localhost:8000/api/book/detail/${article.book_id}/`, {
  //       headers: {
  //         Authorization: `JWT ${localStorage.getItem('token')}`
  //       }
  //     }
  //     );
  //     setDataList(data);
  //   };
  //   take();
  // }, []);

  return (
      <div className={classes.root}>
          <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                  <ListItemText primary="목차" />
              </ListItem>
              <ListItem button>
                  <ListItemText primary="목차2" />
              </ListItem>
          </List>
      </div>
  );
}

export default ArticleQna;
