import React, {useEffect, useState} from 'react';
import AriticleCategory from './AriticleCategory';
import Control from './Control';
import ReadContent from './ReadContent';
import CreateArticleContent from './CreateArticleContent';
import UpdateArticleContent from './UpdateArticleContent';
import axios from 'axios';
import {Link} from 'react-router-dom';

function AriticleCreate({location}) {
  const [mode, setMode] = useState('read');
  const [articleList, setArticleList] = useState([]);

  const bookId = location.state.bookId;
  const bookTitle = location.state.bookTitle;
  let article = null;
  let readTitle = null;
  let readCotent = null;

  // getReadContent(){
  //     var i=0;
  //     while(i<articleList.length){
  //         var data=articleList.articleTitle;
  //         if
  //     }
  //   }

  if (mode === 'read') {
    article = <ReadContent></ReadContent>;
  } else if (mode === 'create') {
    article = <CreateArticleContent onSubmit={function (title, content) {
      const tmp = {articleTitle: title, articleContent: content, bookId: bookId};
      setArticleList(articleList.concat(tmp));
      console.log(articleList);
    }.bind()
    }></CreateArticleContent>;
  } else if (mode === 'update') {
    article = <UpdateArticleContent
        onSubmit={function (title, content) {
          const tmp = {articleTitle: title, articleContent: content, bookId: bookId};
          setArticleList(articleList.concat(tmp));
          console.log(articleList);
        }.bind()
        }></UpdateArticleContent>;
  }

  const InsertArticle = ()=>{
    axios.post('http://choi1994.iptime.org:8000/api/book/article/create/' + bookId + '/', {
      data:
            articleList
    }, {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
      }
    });
  };

  const articleIndex = articleList.map((result) => {
    return (
            <div className="item" key={result.articleTitle}>
                {result.articleTitle}
            </div>
    );
  });

  return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="inputsm" >책 제목: {bookTitle}</label>

                </div>
                <AriticleCategory></AriticleCategory>
            </form>

            <Control onChangeMode={function (_mode) {
              setMode(_mode);
            }.bind()}>

            </Control>

            {article}

            {articleIndex}

            <span>
                <Link to='/Books' ><button type="button" className="btn btn-primary" onClick={InsertArticle}>완성하기</button></Link>
            </span>
        </div>
  );
}

export default AriticleCreate;
