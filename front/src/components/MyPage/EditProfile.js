import React, {useState} from 'react';
import './MyProfile.css';
import { Button } from '@material-ui/core';

function EditProfile(props) {
  const [nickname, setNickname] = useState('');
  const [photo, setPhoto] = useState('');

  return (
        <div className="container">
            {/* <div className="form-group"> */}
            {/*    <label htmlFor="inputsm">제목: </label> */}
            {/*    <input className="form-control input-sm" value={} type="title" /> */}
            {/* </div> */}
            {/* <div className="form-group"> */}
            {/*    <label htmlFor="comment">내용: </label> */}
            {/*    <textarea className="form-control" rows="5" value={} /> */}
            {/* </div> */}
        </div>

  );
}

export default EditProfile;
