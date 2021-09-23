import React, {useEffect, useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import jwtDecode from 'jwt-decode';
import './MemoEditor.css';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import axios from 'axios';

const MyBlock = styled.div`
  .wrapper-class {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

const IntroduceContent = styled.div`
  position: relative;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

function MemoEditor(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const UserId = jwtDecode(localStorage.token);
  let m = '';

  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );
  const memoContent = props.memoContent;
  const htmlToEditor = memoContent;

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    props.onSetMemoProp(
      'memoContent', editorToHtml
    );
  };

  useEffect(() => {
    // 에디터 초기값 설정
    const blocksFromHtml = htmlToDraft(htmlToEditor);
    if (blocksFromHtml) {
      const {contentBlocks, entityMap} = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      // ContentState를 EditorState기반으로 새 개체를 반환한다고 하더군요
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, []);

  return (
      <div>
        <MyBlock>
          <Editor
              // 에디터와 툴바 모두에 적용되는 클래스
              wrapperClassName="wrapper-class"
              // 에디터 주변에 적용된 클래스
              editorClassName="editor"
              // 툴바 주위에 적용된 클래스
              toolbarClassName="toolbar-class"
              // 툴바 설정
              toolbar={{
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: false },
              }}
              placeholder="내용을 작성해주세요."
              localization={{
                locale: 'ko',
              }}
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
          />
        </MyBlock>
          <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml }} onChange={(e)=>{
            console.log(e.target.dangerouslySetInnerHTML);
          }
          } />
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
          <button className='memoBtn'
              onClick={() => {
                console.log(props.memo.memoId);
                axios.put(`http://choi1994.iptime.org:8000/api/memo/update/${props.memo.memoId}/`, {
                  memoId: props.memo.memoId,
                  memoContent: props.memo.memoContent
                }, {
                  headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                  }
                });
                alert('저장되었습니다');
              }}
          >
            저장
          </button>
        </div>
      </div>
  );
}

export default MemoEditor;
