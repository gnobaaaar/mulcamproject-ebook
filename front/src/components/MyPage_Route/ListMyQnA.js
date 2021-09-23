import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

const postList = [
  {
    no: 1,
    title: '질문1',
    content: '질문내용',
    img: 'image',
    book: '책이름'
  },
  {
    no: 2,
    title: '질문2',
    content: '질문내용2',
    img: 'image2',
    book: '책이름2'
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function ListMyQnA(props) {
  const classes = useStyles();
  const [dataList, setDataList] = useState('');
  const [replyList, setReplyList] = useState('');

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://choi1994.iptime.org:8000/api/qna/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      );
      // console.log(data);
      setDataList(data);
    };
    take();
  }, []);

  return (
      <div className={classes.root}>
        <div className="qnaheader">
          나의 질문
        </div>
        <div className="qnabody">
          {console.log(dataList)}
          {console.log(replyList)}
                {
                    dataList ? dataList.map((item, index) => {
                      return (
                          <Accordion style={{width: '600px'}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                              <Typography className={classes.heading}>{item.qna_title}</Typography>
                            </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              <h1>질문</h1>
                              {item.qna_content}
                            </Typography>
                          </AccordionDetails>
                          </Accordion>
                      );
                    })
                      : ''
                }
        </div>
      </div>
  );
}

export default ListMyQnA;
