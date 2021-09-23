import React, {Component, useState} from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';

function SignupModal(props) {
  const [Id, setId] = useState('');
  const [Name, setName] = useState();
  const [Password1, setPassword1] = useState('');
  const [Password2, setPassword2] = useState('');
  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [iMessage, setiMessage] = useState('형식 : 영문(소문자), 숫자');
  const [p12Message, setp12Message] = useState('');
  const [pMessage, setpMessage] = useState('형식 : 영문, 숫자');
  const [nikMessage, setnikMessage] = useState('형식 : 영문(소문자,대문자), 한글, 숫자');
  const [eMessage, seteMessage] = useState('이메일 주소에 @를 포함해 주세요');
  const [pnMessage, setpnMessage] = useState('-는 빼고 입력해주세요');

  // 유효성 체크 함수들
  const idCheck = (e) => {
    setId(e.target.value);
    if (e.target.value.match(/^[a-z0-9]{2,15}$/)) {
      setiMessage('올바른 아이디 형식 입니다.');
    } else {
      setiMessage('올바른 아이디 형식이 아닙니다.');
    }
  };

  const nicknameCheck = (e) => {
    setNickname(e.target.value);
    if (e.target.value.match(/^[가-힣0-9]{2,15}|[a-zA-Z0-9]{2,15}$/)) {
      setnikMessage('올바른 닉네임 형식 입니다.');
    } else {
      setnikMessage('올바른 닉네임 형식이 아닙니다.');
    }
  };

  const emailCheck = (e) => {
    setEmail(e.target.value);
    if (e.target.value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
      seteMessage('올바른 이메일 주소 입니다.');
    } else {
      seteMessage('이메일 주소에 @를 포함해 주세요');
    }
  };

  const passwordCheck = (e) => {
    setPassword1(e.target.value);
    if (e.target.value.match(/^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/)) {
      setpMessage('올바른 비밀번호 형식 입니다.');
    } else {
      setpMessage('비밀번호에 영문, 숫자 형식을 맞춰주세요');
    }
  };

  const password12check = (e) => {
    setPassword2(e.target.value);
    if (Password1 === e.target.value) {
      setp12Message('');
    } else {
      setp12Message('비밀번호가 일치하지 않습니다');
    }
  };

  const phoneCheck = (e) => {
    setPhonenumber(e.target.value);
    if (e.target.value.match(/^[0-9]{10,11}$/)) {
      setpnMessage('올바른 비밀번호 형식 입니다.');
    } else {
      setpnMessage('비밀번호에 영문, 숫자 형식을 맞춰주세요');
    }
  };

  const onSubmitHandler = (e) =>{
    // e.preventDefault();
    console.log(Password1);
    // let body = {
    //   id: Id,
    //   name: Name,
    //   password: Password1,
    //   nickname: Nickname,
    //   email: Email,
    //   phone: Phonenumber
    //
    // };

    // dispatch(registerUser(body))
    //   .then(response =>{
    //     if (response.payload.success) {
    //       alert('회원가입이 완료되었습니다!');
    //       props.history.push('/login'); // react 에서의 페이지 이동 코드
    //     } else {
    //       alert('Error!!');
    //     }
    //   });
  };

  return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group value={Name}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter your name" onChange={e => { setName(e.target.value); }}/>
                        </Form.Group>

                        <Form.Group value={Id}>
                            <Form.Label>ID</Form.Label>
                            <Form.Control placeholder="Enter your ID" onChange={idCheck}/>
                            <sub style={{color: `${Id.match(/^[a-z0-9]{2,15}$/) ? 'blue' : 'red'}`}}>{iMessage}</sub>
                        </Form.Group>

                        <Form.Group value={Nickname}>
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control type="Nickname" placeholder="Enter Nickname" onChange={nicknameCheck}/>
                            <sub style={{color: 'red'}}>{nikMessage}</sub>
                        </Form.Group>

                        <Form.Group value={Password1}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password1" placeholder="Password" onChange={passwordCheck}/>
                            <sub style={{color: 'red'}}>{pMessage}</sub>
                        </Form.Group>

                        <Form.Group value={Password2}>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="Password2" placeholder="Confirm Password" onChange={password12check}/>
                            <sub style={{color: 'red'}}>{p12Message}</sub>
                        </Form.Group>

                        <Form.Group value={Email}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={emailCheck}/>
                            <sub style={{color: 'red'}}>{eMessage}</sub>
                        </Form.Group>

                        <Form.Group value={Phonenumber}>
                            <Form.Label>Phonenumber</Form.Label>
                            <Form.Control type="Phonenumber" placeholder="Enter Phonenumber" onChange={phoneCheck} />
                            <sub style={{color: 'red'}}>{pnMessage}</sub>
                        </Form.Group>

                        <Button block variant="info" type="submit" className="my-3" onSubmit={onSubmitHandler}>
                            회원가입
                        </Button>
                    </Form>
                </Modal.Body>
            </Container>
        </Modal>
  );
}

export default SignupModal;
