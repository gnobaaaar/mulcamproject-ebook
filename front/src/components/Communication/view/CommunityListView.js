import CommonTable from '../CommonTable';
import CommonTableColumn from '../CommonTableColumn';
import CommonTableRow from '../CommonTableRow';
import {Link} from 'react-router-dom';
import React, {Component, useState} from 'react';

function ListCommunication(props) {
  const {communities} = props;
  return (
        <div>
            <CommonTable headersName={['글번호', '제목', '등록일']}>
                {
                    // eslint-disable-next-line max-len
                    Array.isArray(communities) && communities.length ? (communities.map(community => {
                      return (
                            <CommonTableRow key={community.communication_id}>
                                {/* eslint-disable-next-line max-len */}
                                <CommonTableColumn>{ community.communication_id }</CommonTableColumn>
                                <CommonTableColumn>
                                    <Link to={`/ViewCommunication/${community.communication_id}`}>{ community.communication_title }</Link>
                                </CommonTableColumn>
                                {/* eslint-disable-next-line max-len */}
                                <CommonTableColumn>{ community.communication_content }</CommonTableColumn>
                            </CommonTableRow>
                      );
                    })) : (
                        <CommonTableRow>
                        <CommonTableColumn>Empty</CommonTableColumn>
                        </CommonTableRow>
                    )
                }
            </CommonTable>
        </div>
  );
}

export default ListCommunication;
