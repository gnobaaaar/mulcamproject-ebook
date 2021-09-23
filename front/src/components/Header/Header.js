import '../../App.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import BookCreate from '../WeBook/BookCreate';
import { Button, Segment } from 'semantic-ui-react';

function Header(props) {
  const [userprofile, setUserprofile] = useState(false);
  const [userPhoto, setUserPhoto] = useState();
  useEffect(()=>{
    fetch('http://choi1994.iptime.org:8000/user/current/', {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(json => {
        // 현재 유저 정보 받아왔다면, 로그인 상태로 state 업데이트 하고
        if (json.id) {
          // 유저정보를 받아왔으면 해당 user의 프로필을 받아온다.
        }fetch('http://choi1994.iptime.org:8000/user/auth/profile/' + json.id + '/update/', {
          method: 'PATCH',
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          },
        })
          .then((res)=>res.json())
          .then((userData)=> {
            setUserPhoto(userData.photo);
          })
          .catch(error => {
            console.log(error);
          });
      }).catch(error => {
        console.log(error);
      });
  }, [userPhoto]);

  return (
        <>
            <div className="header">
                <div className="header-nav">
                    <div className="header-nav-links">
                        <Link className="header-logo" to="/" style={{textDecoration: 'none'}}><div className='titleFonts'>BookShelf</div></Link>
                        {
                            props.modal === false
                              ? <Link to="/login"><button className="header-btn">로그인</button></Link>
                              : (
                                    <>
                                        <Button inverted color='brown'>
                                            <Link to="/BookCreate" style={{color: 'brown', textDecoration: 'none'}}><div>새 글 작성하기</div></Link>
                                        </Button>
                                        &nbsp;&nbsp;&nbsp;
                                        <div className="user-container" onClick={()=>{ setUserprofile(!userprofile); }}>
                                            <img src={userPhoto} className="user-image" alt="/"></img>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 10l5 5 5-5z"></path>
                                            </svg>
                                        </div>
                                        {
                                            userprofile === true
                                              ? (
                                                    <div className="user-profile">
                                                        <div className="profile-menu">
                                                            <Link to="/mypage"><div className="menu">마이페이</div></Link>
                                                            <Link onClick={props.handleLogout} to="/"><div className="menu">로그아웃</div></Link>
                                                        </div>
                                                    </div>
                                              )
                                              : null
                                        }
                                    </>
                              )
                        }
                    </div>
                </div>
            </div>
        </>
  );
}

export default Header;
