import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import MemoEditor from '../view/MemoEditor';

@inject('MemoStore')
@observer
class MemosContainer extends Component {
  componentDidMount() {
    this.props.MemoStore.selectMyMemo(this.props.bookId);
  }

    onSetMemoProp = (name, value) => {
      this.props.MemoStore.setMemoProp(name, value);
    };

    onAddMemo = () => {
      this.props.MemoStore.addMemo();
    };

    onRemoveMemo = () => {
      this.props.MemoStore.removeMemo();
    };

    onsetModifyMemo = () => {
      this.props.MemoStore.modifyMemo();
    };

    onMemoContent = (content) => {
      this.props.MemoStore.setMemoState(content);
    }

    render() {
      // 추후 이벤트 정리해야됩니다
      const { memos } = this.props.MemoStore;
      const memo = this.props.MemoStore.memo;
      const memoContent = this.props.MemoStore.memo.memoContent;
      console.log(memoContent);

      return (
          <div>
          {memo === null
            ? (
                <>
                <div>아무것도 없습니다</div>
                <div>
                  <button onClick={(e)=>{
                  }}>메모 생성</button>
                </div>
                </>
            )
            : (<div>
                  <MemoEditor
                      memos={memos}
                      memo={memo}
                      memoContent = {memoContent}
                      onSetMemoProp = {this.onSetMemoProp}
                      onsetModifyMemo = {this.onsetModifyMemo}
                      onMemoContent = {this.onMemoContent}
                  />
                </div>)
          }
          </div>
      );
    }
}

export default MemosContainer;
