import axios from 'axios';

class ArticleApi {
    URL = 'http://choi1994.iptime.org:8000/api/book/article/';

    articleCreate(data) {
      return axios
        .post(this.URL + 'create/', { data: `${data}` })
        .then(response => response.data); // resolve
      // .create(()=>{}) // 예외발생 reject
      // .finally(()=>{}); // resolve, reject 모든 경우
    }

    articleUpdate(id, data) {
      return axios
        .put(this.URL + `update/${id}/`, { data: `${data}` })
        .then(response => response.data);
    }

    articleDelete(id) {
      return axios
        .delete(this.URL + `delete/${id}/`)
        .then(response => response.data);
    }

    // book_id로 분류한 article
    articleBook(id) {
      return axios
        .get(this.URL + `${id}/`)
        .then(response => response.data);
    }

    articleDetail(id) {
      return axios
        .get(this.URL + `detail/${id}/`)
        .then(response => response.data);
    }

    articleList() {
      return axios.get(this.URL + '', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }})
        .then(response => response.data);
    }
}

export default ArticleApi;
