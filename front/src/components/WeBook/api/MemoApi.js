import axios from 'axios';

class MemoApi {
    URL = 'http://choi1994.iptime.org:8000/api/memo/';

    memoCreate(data) {
      return axios
        .post(this.URL + 'create/', { data: `${data}` }, {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }})
        .then(response => response.data);
      // .create(()=>{}) // 예외발생 reject
      // .finally(()=>{}); // resolve, reject 모든 경우
    }

    memoUpdate(id, data) {
      return axios
        .put(this.URL + `update/${id}/`, { data: `${data}` })
        .then(response => response.data);
    }

    memoDelete(id) {
      return axios
        .delete(this.URL + `delete/${id}/`)
        .then(response => response.data);
    }

    memoList() {
      return axios.get(this.URL + '', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }})
        .then(response => response.data);
    }

    memoDetail(id) {
      return axios.get(this.URL + `detail/${id}/`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      }).then(response => response.data);
    }

    memoMyList(id) {
      return axios
        .get(this.URL + `myMemo/${id}/`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }})
        .then(response => response.data);
    }
}

export default MemoApi;
