import React from 'react';
import ListInterpark from './ListInterpark';
import SearchResultBar from './SearchResultBar';
import { Divider } from 'semantic-ui-react';

function SearchInterpark(props) {
  return (
        <div>
            <SearchResultBar />
            <ListInterpark/>
        </div>
  );
}

export default SearchInterpark;
