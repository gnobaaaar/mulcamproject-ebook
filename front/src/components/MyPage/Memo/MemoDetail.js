import React, {useEffect, useState} from 'react';
import {
  Grid,
  Header,
  Image,
  Ref,
  Segment,
} from 'semantic-ui-react';

import axios from 'axios';
import styled from 'styled-components';

function MemoDetail({location}) {
  const [detail, setDetail] = useState([]);
  const memoId = location.state.memoId;

  const IntroduceContent = styled.div`
  position: relative;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 4rem;
    width: 500px;
`;

  useEffect(() => {
    const take = async () => {
      const {data} = await axios.get('http://choi1994.iptime.org:8000/api/memo/detail/' + memoId + '/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      });
      setDetail(data);
    };
    take();
  }, []);

  return (
     <Grid columns={1}>
        <Grid.Column>
              <Segment secondary>
                <Header as='h3'>{detail.bookId}</Header>
              </Segment>

            <IntroduceContent dangerouslySetInnerHTML={{ __html: detail.memoContent }} />
        </Grid.Column>
     </Grid>
  );
}

export default MemoDetail;
