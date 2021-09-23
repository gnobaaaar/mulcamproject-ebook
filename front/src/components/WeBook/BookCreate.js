import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import S3upload from '../S3upload';

function BookCreate(props) {
  const [BookImg, setBookImg] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [bookMakeList, setBookMakeList] = useState({
    bookTitle: '',
    bookWritter: '',
    bookPublisher: '',
    bookImg: ''});

  const [flag, setFlag] = useState(false);
  const [bookId, setBookId] = useState('');

  const [imgBase64, setImgBase64] = useState(''); // 파일 base64
  const [imgFile, setImgFile] = useState(null);// 파일
  const InsertBook = ()=>{
    setBookImg(S3upload(imgFile));
    // axios.post('http://localhost:8000/api/book/create/', {
    //   data:
    //     bookMakeList
    // }, {
    //   headers: {
    //     Authorization: `JWT ${localStorage.getItem('token')}`,
    //   }
    // }).then((response) => {
    //   setBookId(response.data.bookId);
    //   setFlag(true);
    // }
    //
    // );
  };
  // console.log(BookImg);
  // console.log(imgBase64);
  return (
        <div style={{marginTop: '40px'}}>
                <img style={{width: '150px', height: '150px'}} src={imgBase64} />
                <div>
                    <input type="file" name="imgFile" id="imgFile" onChange={(event) => {
                      let reader = new FileReader();

                      reader.onloadend = () => {
                        // 2. 읽기가 완료되면 아래코드가 실행됩니다.

                        const base64 = reader.result;
                        if (base64) {
                          setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
                        }
                      };
                      if (event.target.files[0]) {
                        reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
                        setImgFile(event.target.files[0]); // 파일 상태 업데이트
                      }
                    }}/>
                </div>

                <div className="form-group">
                    <label htmlFor="inputsm" >책 제목:</label>
                    <input className="form-control input-sm" onChange= {e => setBookMakeList({...bookMakeList, bookTitle: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputsm">지은이: </label>
                    <input className="form-control input-sm" onChange={e => setBookMakeList({...bookMakeList, bookWritter: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputsm">출판사: </label>
                    <input className="form-control input-sm" onChange={e => setBookMakeList({...bookMakeList, bookPublisher: e.target.value})}/>
                </div>
                { flag
                  ? <button type="submit" className="btn btn-primary" >
                    <Link
                        className="header-dashboard" to={{

                          pathname: `/ArticleCreate/${bookMakeList.bookTitle}`,
                          state: {
                            bookTitle: bookMakeList.bookTitle,
                            bookId: bookId
                          }
                        }}
                    >넘어가기</Link>
                    </button> : <button type="submit" className="btn btn-primary" onClick={InsertBook}>글작성하기</button>
                }

        </div>
  );
}

export default BookCreate;
