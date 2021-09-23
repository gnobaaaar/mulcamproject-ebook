import React from 'react';

function Control(props) {
  return (
        <ul>
            <li><a href="/create" onClick={function (e) {
              e.preventDefault();
              props.onChangeMode('create');
            }.bind()}>목차 추가하기</a></li>

            <li><a href="/update" onClick={function (e) {
              e.preventDefault();
              props.onChangeMode('update');
            }.bind()}>목차 수정하기</a></li>
        </ul>
  );
}

export default Control;
