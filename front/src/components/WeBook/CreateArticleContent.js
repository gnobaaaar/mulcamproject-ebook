import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function CreateArticleContent(props) {
  const [articleMakeList, setArticleMakeList] = useState({article_title: '', article_content: ''});

  return (
      <article>
          <h2>create</h2>
          <form action="/create_process" method="post"
                onSubmit={function (e) {
                  e.preventDefault();
                  props.onSubmit(
                    e.target.title.value,
                    e.target.content.value
                  );
                  alert('submit!!');
                }.bind()}
          >
              <div className="form-group">
                  <label htmlFor="inputsm">목차이름: </label>
                  <input className="form-control input-sm" type="title" name="title" placeholder="title" onChange= {e => setArticleMakeList({...articleMakeList, article_title: e.target.value})}/>
              </div>
              <div className="form-group">
                  <label htmlFor="comment">내용: </label>
                  <textarea className="form-control" rows="5" name="content" placeholder="content" onChange= {e => setArticleMakeList({...articleMakeList, article_content: e.target.value})}/>
              </div>
              <p>
                  <button type="submit" className="btn btn-primary" >추가하기</button>
              </p>

          </form>

      </article>

  );
}

export default CreateArticleContent;
