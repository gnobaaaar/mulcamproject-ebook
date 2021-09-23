import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Main from './Main';
import Search from './Search';
import ListCommunication from './Communication/container/ListCommunication';
import MyPage from './MyPage/MyPage';
import ViewCommunication from './Communication/ViewCommunication';
import CommunityPage from './Communication/view/CommunityPage';
import BookContainer from './WeBook/view/MainBook';
import List from './WeBook/container/BookContainer';
import Articless from './WeBook/container/ArticleDetail';
import BookCreate from './WeBook/BookCreate';
import ArticleCreate from './WeBook/ArticleCreate';
import S3upload from './S3upload';
import './Home.css';

const Home = () => {
  const [activeItem, setActiveItem] = useState();
  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });

  return (
      <>
      <div className="main-bar">
          <div className="menu-Bar">
              <AppBar position="static" style={{zIndex: '0'}}>
                  <Tabs aria-label="simple tabs example" centered>
                      <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                          <Tab label="홈" />
                      </Link>
                      <Link to="/Books" style={{textDecoration: 'none', color: 'white'}}>
                          <Tab label="우리들의도서관" />
                      </Link>
                      <Link to="/search" style={{textDecoration: 'none', color: 'white'}}>
                          <Tab label="도서찾기" />
                      </Link>
                  </Tabs>
              </AppBar>
          </div>
          <Route path="/" component={Main} exact />
          <Route path="/Books/api/" component={BookContainer} />
          <Route path="/ListCommunication" component={ListCommunication} />
          <Route path="/Books" component={BookContainer} />
          <Route path="/community" component={CommunityPage}/>

          <Route path="/BookCreate" component={BookCreate}/>
          <Route path={'/ArticleCreate/:book_title'} component={ArticleCreate}/>

          {/* <Route path="/ListCommunication" component={ListCommunication} /> */}
          <Route path="/search" component={Search} />
          <Route path="/mypage" component={MyPage}/>
          <Route exact path='/ViewCommunication/:no' component={ViewCommunication} />
          {/* <Route path={'/Article/:id'} component={Article}/> */}
          <Route path={'/List'} component={List}/>
          <Route path={'/Articless/:id'} component={Articless}/>
          <Route path={'/S3upload'} component={S3upload} />
      </div>
</>
  );
};

export default Home;
