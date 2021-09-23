import {makeObservable, action, observable, runInAction} from 'mobx';
import MemberApi from '../api/MemberApi';

class MemberStore {
    @observable members = [];

    @observable member = {user: '', user_pk: '', email: '', photo: '', myInfo: ''} ;

    @observable message ='';

    MemberApi = new MemberApi();

    constructor() {
      makeObservable(this);
    }

    @action
    setMemberProp(user_pk, user) {
      this.member = {
        ...this.member,
        [user_pk]: user,
      };
    }

    @action
    async addTodo() {
      const result = await this.todoApi.todoCreate(this.todo.title);
      if (result == null) {
        this.message = `${this.todo.title} 일정이 추가되지 않았습니다.`;
      }
      // this.todos = this.todos.concat(this.todo);
      const todoList = await this.todoApi.todoList();
      runInAction(()=>{ this.todos = todoList; });
    }

    @action
    async removeTodo() {
      await this.todoApi.todoDelete(this.todo.id);
      // this.todos = this.todos.filter((element) => element.id !== this.todo.id);
      const result = await this.todoApi.todoList();
      runInAction(()=>{ this.todos = result; });
      runInAction(()=>{ this.todo = {}; });
    }

    @action
    async modifyTodo() {
      await this.todoApi.todoUpdate(this.todo.id, this.todo.title);
      // this.todos = this.todos.map((element) =>
      // element.id === this.todo.id ? this.todo : element);
      const result = await this.todoApi.todoList();
      runInAction(()=>{ this.todos = result; });
      runInAction(()=>{ this.todo = {}; });
    }

    @action
    async selectTodo(id) {
      const result = await this.todoApi.todoDetail(id);
      runInAction(()=>{ this.todo = result; });
      // this.todo =this.todos.find((element) => element.id === id)
    }

    @action
    async selectAll() {
      const reuslt = await this.todoApi.todoList();
      runInAction(() => { this.todos = reuslt; });
    }

  // @computed
  // get getTodo(){
  //     return this.todo ? this.todo : {};
  // }

  // @computed
  // get getTodos(){
  //     return this.todos ? this.todos.slice() : [];
  // }
}

export default new TodoStore();
