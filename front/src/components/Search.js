import React, { useEffect, useState} from 'react';
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // 검색어 state
  const [term, setTerm] = useState('');

  useEffect(() => {
    const take = async () => {
      const { data } = await axios.get(
        'https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&target=title',
        {
          headers: {
            Authorization: 'KakaoAK d810699d948758e4d87e68dd78bb3e90',
          },
          params: {
            query: term,
          },
        }
      );
      console.log(data.documents);
      setDocuments(data.documents);
      setIsLoading(false);
    };
    take();
  }, [term]);

  const renderResults = documents.map((document) => {
    return (
                <div className="interpark">
                    <a href={document.url}
                    >
                        <img src={document.thumbnail} alt={document.title} title={document.title} />
                        <div className="interpark__data">
                            <h3 className="interpark__title">{document.title}</h3>
                            <p className="interpark__summary">{document.contents.slice(0, 150)}...</p>
                        </div>
                    </a>
                </div>
    );
  });

  return (
            <div style={{marginTop: '20px', padding: '10px' }}>
                <div className="ui form">
                    <label>검색어를 입력하세요</label>
                    <input
                        className="input" value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
                <section className="bookContainerss">
                    {isLoading ? (
                        <div className="bookLoader">
                            <span className="loader__text">loading...</span>
                        </div>
                    ) : (
                        <div className="interparks">
                            {renderResults}
                        </div>
                    )}
                </section>
            </div>
  );
};

export default Search;
