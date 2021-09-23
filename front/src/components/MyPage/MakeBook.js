import React, {useState} from 'react';
import {Button, Image, Input} from 'semantic-ui-react';
import axios from 'axios';

function MakeBook(props) {
  const [textList, setTextList] = useState({});

  const handleSubmit = () => {
    console.log(textList);
    axios
      .post('http://choi1994.iptime.org:8080/book/create/',
        { textList },
        {headers: {'Content-Type': 'application/json'}})
      .then((res) => res.data);
  };

  return (
    <div>
        <div>
            <div className="imgContainer">
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
            </div>
            <div>
                <Button>이미지 업로드</Button>
            </div>
            <div>
                <Button>이미지 제거</Button>
            </div>
        </div>
        <div>
            <div><Input placeholder='책 제목' onChange={
                (event) => {
                  setTextList({...textList, title: event.target.value});
                }} />
            </div>
            <div><Input placeholder='저자' onChange={
                (event) => {
                  setTextList({...textList, writer: event.target.value});
                }}
            /></div>
            <div><Input placeholder='출판사' onChange={
                (event) => {
                  setTextList({...textList, publisher: event.target.value});
                }}/></div>
        </div>
        <div>
             <Button onClick={handleSubmit}>출판하기</Button>
        </div>
    </div>
  );
}

export default MakeBook;
