import React, {useEffect, useState, useContext} from 'react';

import {
  Button,
  Icon,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import './Article.css';
import BooksDetail from './BooksDetail';
import LangContext from './LangContext';

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_ANIMATION':
      return { ...state, animation: action.animation, visible: !state.visible, key: action.key };
    case 'CHANGE_DIMMED':
      return { ...state, dimmed: action.dimmed };
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction, visible: false };
    default:
      throw new Error();
  }
}

function Article({location}) {
  // contextAPI 전역변수
  const [articleId, setArticleId] = useState(null);
  const id = location.state.id;
  const bookId = location.state.bookId;

  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: 'scale down',
    direction: 'right',
    dimmed: false,
    visible: false,
    key: ''
  });

  useEffect(()=>{
    if (articleId == null) {
      setArticleId(id);
      console.log('초기화');
    } else {
      console.log('nonono');
    }
  });

  const { animation, dimmed, direction, visible, key} = state;
  const vertical = direction === 'bottom' || direction === 'top';
  return (
          <div className='container'>
              <div className='buttons'>
                  <div className='padding'>
                      <Button style={{backgroundColor: '#BF8450'}} size='big' color='olive' animated='vertical' onClick={() => dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down', key: 'menu'})
                      } >
                          <Button.Content hidden>메뉴</Button.Content>
                          <Button.Content visible>
                              <Icon name='bars' />
                          </Button.Content>
                      </Button>
                  </div>
                  <div className='padding'>
                      <Button style={{backgroundColor: '#BF8450'}} size='big' color='olive' animated='vertical' onClick={() => dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down', key: 'memo'})
                      }>
                          <Button.Content hidden>메모장</Button.Content>
                          <Button.Content visible>
                              <Icon name='sticky note outline' />
                          </Button.Content>
                      </Button>
                  </div>
                  <div className='padding'>
                      <Button style={{backgroundColor: '#BF8450'}} size='big' color='olive' animated='vertical' onClick={() => dispatch({ type: 'CHANGE_ANIMATION', animation: 'scale down', key: 'qna'})
                      }>
                          <Button.Content hidden>Q&A</Button.Content>
                          <Button.Content visible>
                              <Icon name='question circle outline' />
                          </Button.Content>
                      </Button>
                  </div>
              </div>
              <div>
            <Sidebar.Pushable as={Segment} style={{ overflow: 'hidden'}}>
              {
                  key === 'menu'
                    ? <Verticalsidebarmenu
                         animation={animation}
                         direction={direction}
                         visible={visible}
                         bookId={bookId}
                         setArticleId={setArticleId}
                     /> : console.log('error')
               }
                {
                    key === 'memo'
                      ? <Verticalsidebarmemo
                            animation={animation}
                            direction={direction}
                            visible={visible}
                            // id={bookId}
                        /> : console.log('error')
                }
                {
                key === 'qna'
                  ? <Verticalsidebarqna
                        animation={animation}
                        direction={direction}
                        visible={visible}
                        // bookId={bookId}
                    /> : console.log('error')
            }
                <LangContext.Provider value={articleId}>
                <Sidebar.Pusher dimmed={dimmed && visible}>
                  <div className={visible === true ? 'contentsss' : 'contents'}>
                      <BooksDetail articleId={articleId} setArticleId={setArticleId}/>

                  </div>
              </Sidebar.Pusher>
                </LangContext.Provider>
            </Sidebar.Pushable>

          </div>
          </div>

  );
}

export default Article;
