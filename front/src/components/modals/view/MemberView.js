import React from 'react';

function LoginView(props) {
  return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <div className="exit">
                        <button onClick={()=>{ history.goBack(); }}>
                            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                        </button>
                    </div>
                    <span>{JoinLoign}</span>
                    <form>
                        {
                            JoinLoign === '로그인'
                              ? (
                                    <>
                                        <input type="text" placeholder="아이디를 입력하세요" onChange={handleNameChange}/>
                                        <input type="password" placeholder="비밀번호를 입력하세요" id="password" onChange={handlePasswordChange}/>
                                        <button className="JoinLoign-button" onClick={(e)=>{
                                          e.preventDefault();
                                        }}>{JoinLoign}</button>
                                    </>
                              )
                              : (
                                    <>
                                        <input type="text" placeholder="아이디를 입력하세요" onChange={handleNameChange}/>
                                        <input type="password" placeholder="비밀번호를 입력하세요" onChange={handlePasswordChange}/>
                                        <button className="JoinLoign-button" onClick={(e)=> {
                                          e.preventDefault();
                                        }}
                                        >{JoinLoign}</button>
                                    </>
                              )
                        }

                    </form>
                    <div className="login-foot">
                        {
                            JoinLoign === '회원가입'
                              ? (
                                    <>
                                        <span>이미 회원이신가요  ?</span>
                                        <div className="foot-link" onClick={(e)=>{
                                          e.preventDefault();
                                          setJoinLogin('로그인');
                                        }}>로그인</div>
                                    </>
                              )
                              : (
                                    <>
                                        <span>아직 회원이 아니신가요 ?</span>
                                        <div className="foot-link" onClick={(e)=>{
                                          e.preventDefault();
                                          setJoinLogin('회원가입');
                                        }}>회원가입</div>
                                    </>
                              )
                        }
                    </div>
                </div>
            </div>
        </>
  );
}

export default LoginView;
