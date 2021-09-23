import React, {useEffect} from 'react';
import { Table } from 'semantic-ui-react';
import axios from 'axios';
import './ArticleDetail.css';

function ArticleDeatilView(props) {
  const {articles} = props;
  const {article} = props;

  const id = props.id;
  const { onArticleDetail } = props;

  return (
      <div className='articleContainers'>
          <div className='articleTitle'>{article.articleTitle}</div>
          <div className="articleContent">{article.articleContent}</div>
      </div>

  );
}

export default ArticleDeatilView;
