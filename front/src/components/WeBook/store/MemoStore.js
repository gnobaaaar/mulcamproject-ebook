import { makeObservable, action, observable, runInAction } from 'mobx';
import MemoApi from '../api/MemoApi';

class ArticleStore {
    @observable memos = [];

    @observable memo = { memoId: '', memoTitle: '', memoContent: '', bookId: ''};

    @observable contents = '';

    memoApi = new MemoApi();

    constructor() {
      makeObservable(this);
    }

    @action
    setMemoProp(name, value) {
      this.memo = {
        ...this.memo,
        [name]: value,
      };
    }

    @action
    async addMemo() {
      const result = await this.memoApi.memoCreate(this.memo);
      if (result == null) {
        this.message = '추가되지 않았습니다.';
      }
      this.memos = this.memos.concat(this.memo);
    }

    @action
    async removeMemo() {
      await this.memoApi.memoDelete(this.memo.memoId);
      const result = await this.memoApi.memoList();
      runInAction(() => {
        this.memos = memo;
      });
      runInAction(() => {
        this.memo = {};
      });
    }

    @action
    async modifyMemo() {
      await this.memoApi.memoUpdate(this.memo.memoId, this.memo);
      const result = await this.memoApi.memoDetail(this.memo.memoId);
      runInAction(() => {
        this.memo = result;
      });
    }

    @action
    async selectAll() {
      const result = await this.memoApi.memoList();
      runInAction(()=>{
        this.memos = result;
      });
    }

    @action
    async selectMyMemo(id) {
      const result = await this.memoApi.memoMyList(id);
      runInAction(()=>{
        this.memo = result;
      });
    }

    @action
    setMemoState(content) {
      this.contents = content;
    }
}

export default new ArticleStore();
