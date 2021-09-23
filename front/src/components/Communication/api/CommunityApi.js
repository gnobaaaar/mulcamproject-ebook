import axios from 'axios';

class CommunityApi {
    URL = 'http://choi1994.iptime.org:8000/api/community/'; // /api/community/

    communicationCreate(data) {
      return axios
        .post(this.URL + 'create/', { data: `${data}` })
        .then(response => response.data); // resolve
      // .create(()=>{}) // 예외발생 reject
      // .finally(()=>{}); // resolve, reject 모든 경우
    }

    communicationUpdate(id, data) {
      return axios
        .put(this.URL + `update/${id}/`, { data: `${data}` })
        .then(response => response.data);
    }

    communicationDelete(id) {
      return axios
        .delete(this.URL + `delete/${id}/`)
        .then(response => response.data);
    }

    communicationDetail(id) {
      return axios
        .get(this.URL + `detail/${id}/`)
        .then(response => response.data);
    }

    communicationList() {
      return axios.get(this.URL).then(response => response.data);
    }
}

export default CommunityApi;
