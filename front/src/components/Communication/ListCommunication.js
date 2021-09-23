import React, {useState, useEffect} from 'react';
import SearchBar from '../SearchBar.js';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import CommonTable from './CommonTable';
import CommonTableColumn from './CommonTableColumn';
import CommonTableRow from './CommonTableRow';
import axios from 'axios';
let communicationId = '';
function ListCommunication(props) {
  const [communicationList, setCommunicationList] = useState([]);
  const [search, setSearch] = useState('');
  const [dataList, setDataList] = useState([]);
  // const [communicationId, setCommunicationId] = useState('');
  const [CommunicationTitle, setCommunicationTitle] = useState('');
  const [CommunicationContent, setCommunicationContent] = useState('');
  const [CommunicationImg, setCommunicationImg] = useState('');
  const [CommunicationDate, setCommunicationDate] = useState('');

  useEffect(() => {
    const take = async () => {
      const { data } = await axios.get('http://choi1994.iptime.org:8000/api/community/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }
      );
      setCommunicationList(data);
    };
    take();
  }, []);
  console.log('list', communicationList);

  return (
        <div>
            <div className="menu-Bar" color="black">
                <Link to="/"><label>#자유 게시판</label></Link>
                <Link to="/"><label>#중고거래 게시판</label></Link>
                <Link to="/"><label>#멘토링 게시판</label></Link>
                <Link to="/"><label>#스터디 게시판</label></Link>
            </div>
            <Nav>
                <SearchBar value={search} onChange={e => { setSearch(e.target.value); }}/>
                <Link to={'/CreateCommunication'}><button type="button" className="btn btn-primary">글 작성</button></Link>
            </Nav>

            <CommonTable headersName={['글번호', '제목', '등록일']}>
                {
                    communicationList ? communicationList.map((item, index) => {
                      return (
                            <CommonTableRow key={index}>
                                <CommonTableColumn>
                                    {item.communication_id}
                                </CommonTableColumn>
                                <CommonTableColumn>
                                     <Link to={`/ViewCommunication/${item.communication_title}`}>{item.communication_title}</Link>
                                </CommonTableColumn>
                                {/* eslint-disable-next-line max-len */}
                                <CommonTableColumn>{item.communication_date}</CommonTableColumn>
                            </CommonTableRow>
                      );
                    }) : ''
                }
            </CommonTable>
        </div>
  );
}

export default ListCommunication;
