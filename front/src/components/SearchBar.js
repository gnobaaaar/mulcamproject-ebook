import React, {useState} from 'react';
import { Icon, Input } from 'semantic-ui-react';

function SearchBar(props) {
  const [searchText, setSearchText] = useState('');

  return (
        <div>
            <Input
                icon={<Icon name='search' inverted circular link />}
                placeholder='Search...'
            />
        </div>
  );
}

export default SearchBar;
