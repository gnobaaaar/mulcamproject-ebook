import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import SearchBar from '../../SearchBar';

function CommunityHeader(props) {
  const [search, setSearch] = useState('');

  return (
        <div>
            <div className="menu-Bar" color="black">
                <Link to="/"><label># 자유 게시판</label></Link>
                <Link to="/"><label># 중고거래 게시판</label></Link>
                <Link to="/"><label># 멘토링 게시판</label></Link>
                <Link to="/"><label># 스터디 게시판</label></Link>
            </div>
            <Nav>
                <SearchBar value={search} onChange={e => { setSearch(e.target.value); }}/>
                <Link to={'/CreateCommunication'}><button type="button" className="btn btn-primary">생성</button></Link>
            </Nav>
        </div>
  );
}

export default CommunityHeader;
