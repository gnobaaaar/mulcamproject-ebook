import axios from 'axios';

class MemberApi {
    URL = 'http://choi1994.iptime.org:8000/user/'

    Login() {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => response.json());
    }
}
export default MemberApi;
