import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ArticleDeatilView from '../view/ArticleDeatilView';
import ArticleListView from '../view/ArticleListView';

@inject('ArticleStore')
@observer
class ArticleDetail extends Component {
  componentDidMount() {
    this.props.ArticleStore.selectArticle(this.props.ArticleStore.index);
  }

  onSetArticleProp = (name, value) => {
    this.props.ArticleStore.setArticleProp(name, value);
  };

    onAddArticle = () => {
      this.props.ArticleStore.addArticle();
    };

    onRemoveArticle = () => {
      this.props.ArticleStore.removeArticle();
    };

    onModifyArticle = () => {
      this.props.ArticleStore.modifyArticle();
    };

    onsetIndexProp = (id) => {
      this.props.ArticleStore.setIndexProp(id);
    }

    onArticleDetail = (id) => {
      this.props.ArticleStore.selectArticle(id);
    }

    onViewState = (e) => {
      this.props.ArticleStore.setViewState(e.target.value);
    }

    render() {
      const {articles, article} = this.props.ArticleStore;
      const id = this.props.ArticleStore.index;
      const viewState = this.props.ArticleStore.viewState;

      return (
          <div className='articleContainer' style={{display: 'flex', marginTop: '30px'}}>
            {
              viewState === '' ? (
                  <>
                      <div className='beforeMenu' style={{width: '90%'}}>
                        <ArticleDeatilView
                            articles={articles}
                            article={article}
                            id={id}
                            onSetArticleProp={this.onSetArticleProp}
                            onAddArticle={this.onAddArticle}
                            onRemoveArticle={this.onRemoveArticle}
                            onModifyArticle={this.onModifyArticle}
                            setIndexProp={this.onsetIndexProp}
                            onArticleDetail={this.onArticleDetail}
                        />
                      </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '80px'}}>
                      <button className='articleBtn' onClick={this.onViewState} value='menu'>menu</button>
                      {/* <button onClick={this.onViewState} value='qna'>큐앤에이</button> */}
                      <button className='articleBtn' onClick={this.onViewState} value='memo'>memo</button>
                    </div>
                  </>
              ) : (
                  <>
                    <div className='afterMenu' style={{width: '60%'}}>
                      <ArticleDeatilView
                      articles={articles}
                      article={article}
                      id={id}
                      onSetArticleProp={this.onSetArticleProp}
                      onAddArticle={this.onAddArticle}
                      onRemoveArticle={this.onRemoveArticle}
                      onModifyArticle={this.onModifyArticle}
                      setIndexProp={this.onsetIndexProp}
                      onArticleDetail={this.onArticleDetail}
                      />
                    </div>
                    <div style={{width: '30%'}}>
                      <ArticleListView
                      viewState={viewState}
                      articles={articles}
                      article={article}
                      id={id}
                      setIndexProp={this.onsetIndexProp}
                      onArticleDetail={this.onArticleDetail}
                      />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', width: '80px'}}>
                      <button className='articleBtn' onClick={this.onViewState} value=''>menu</button>
                      {/* <button onClick={this.onViewState} value=''>큐앤에이</button> */}
                      <button className='articleBtn' onClick={this.onViewState} value=''>memo</button>
                    </div>
              </>
              )
            }
          </div>
      );
    }
}

export default ArticleDetail;
