/**
 * Created by hien.phanthe on 3/8/17.
 */

// const BASE_URL = 'http://localhost:3000/api/';
const BASE_URL = 'https://observerjakarta.herokuapp.com/api/';

export default class OBService {

    static updateCandidate(candidate) {

        var data = {
            ...candidate
        };

        return this.callRequest('POST', 'candidate', data);
    }

    static signin(credential) {

        var data = {
            username: credential.username,
            password: credential.password,
        };

        return this.callRequest('POST', 'session/login', data);
    }

    static getAllCandidates() {
        return this.callRequest('GET', 'candidate')
    }



    static buildUrl(urlPath) {
        return `${BASE_URL}${urlPath}`
    }

    static initHeader() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
    }

    static callRequest(method, urlPath, data) {
        return fetch(this.buildUrl(urlPath), {
            method: method,
            headers: this.initHeader(),
            body: data != null ?  JSON.stringify(data) : null
        }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
