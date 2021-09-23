import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { useHistory } from 'react-router';
import './LoginModal.css';
import MemberView from '../view/MemberView';
// import GoogleLogin from 'react-google-login';

@inject('MemberStore')
@observer
class MemberContainer extends Component {
    onSetProps = (username, token) => {
      this.props.MemberStore.setLoginProps(username, token);
    }

    //     if (json.username && json.token) {
    //     // eslint-disable-next-line max-len
    //     props.userHasAuthenticated(true, json.username, json.token);
    //     history.push('/');
    //     props.setModal(true);
    // } else {
    //     alert('사용불가능한 아이디입니다.');
    // }

    // const handleNameChange = (e) => {
    //   setUsername(e.target.value);
    // };
    // const handlePasswordChange = (e) => {
    //   setUserPassword(e.target.value);
    // };

    // .then(json => {
    //     if (json.username && json.token) {
    //     // eslint-disable-next-line max-len
    //     props.userHasAuthenticated(true, json.username, json.token);
    //     history.push('/');
    //     props.setModal(true);
    // } else {
    //     alert('사용불가능한 아이디입니다.');
    // }
    // })
    // .catch(error => alert(error));

    render() {
      return (
        <div>
          <MemberView />
        </div>
      );
    }
}

export default MemberContainer;
