import React, {useState} from 'react';
import {Menu} from 'semantic-ui-react';
import {Link, Route} from 'react-router-dom';
import ListCourse from '../MyPage_Route/ListCourse';
import ListMemo from '../MyPage_Route/ListMemo';
import ListMyQnA from '../MyPage_Route/ListMyQnA';
import ListWrite from '../MyPage_Route/ListWrite';
import ListReceivedQnA from '../MyPage_Route/ListReceivedQnA';
import ListCourseReview from '../MyPage_Route/ListCourseReview';
import MyProfile from './MyProfile';
import QnADetail from './QnA/QnADetail';
import MemoList from './Memo/MemoList';
import MemoDetail from './Memo/MemoDetail';
import Review from './MyBook/Review';
import '../../App.css';
import EditProfile from './EditProfile';
import MakeBook from './MakeBook';

function MyPageMenuBar() {
  return (
        <div className="myPageMenu-Bar" style={{display: 'flex'}}>
            <div style={{float: 'left'}}>
            <Menu vertical >
                <Menu.Item>
                    <Link to='/mypage' style={{color: 'black' }}><Menu.Menu>마이페이지</Menu.Menu></Link>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>학습관리</Menu.Header>

                    <Menu.Menu>
                        {/* <Link to='/mypage/ListCourse' style={{color: 'black'}}> */}
                        {/*    나의 수강 목록 */}
                        {/* </Link> */}
                        <br/><br/>
                        <Link to='/mypage/ListMemo' style={{color: 'black'}}>
                            나의 메모장
                        </Link>
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>등록한 책</Menu.Header>

                    <Menu.Menu>
                        <Link to='/mypage/ListWrite' style={{color: 'black'}}>
                            내가 등록한 책
                        </Link>
                        <br/><br/>
                    </Menu.Menu>
                </Menu.Item>

                {/* <Menu.Item> */}
                {/*    <Menu.Header>내 정보</Menu.Header> */}
                {/*    <Menu.Menu> */}
                {/*        <Link to='/mypage/ChangeMyInfo' style={{color: 'black'}}> */}
                {/*            개인 정보 수정 */}
                {/*        </Link> */}
                {/*    </Menu.Menu> */}
                {/* </Menu.Item> */}
            </Menu>
            </div>
            <div style={{marginLeft: '100px'}}>
                <Route path='/mypage' component={MyProfile} exact/>
                <Route path='/mypage/ListCourse' component={ListCourse} />
                <Route path='/mypage/ListMemo' component={ListMemo} />
                <Route path='/mypage/ListWrite' component={ListWrite} />
                 <Route path='/mypage/ListReceivedQnA' component={ListReceivedQnA} />
                 <Route path='/mypage/ListCourseReview' component={ListCourseReview} />
                {/* <Route path='/ListMyCommunication' component={ListMyCommunication} /> */}
                {/* <Route path='/ChangeMyInfo' component={ChangeMyInfo} /> */}
                {/* <Route path='/ChangeMyProfile' component={ChangeMyProfile} /> */}
                <Route path='/mypage/MemoList' component={MemoList}/>
                <Route path='/mypage/MemoDetail' component={MemoDetail}/>
                <Route path='/mypage/Review' component={Review}/>
                <Route path='/mypage/EditProfile' component={EditProfile}/>
                <Route path='/mypage/MakeBook' component={MakeBook}/>
            </div>
        </div>
  );
}

export default MyPageMenuBar;
