import axiosClient from './axiosClient';

export class GetApiService {
  constructor() {
    this.axiosClient = axiosClient;
  }
  getUrl(url) {
    return new Promise((resolve, reject) => {
      this.axiosClient
        .get(url)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
export default GetApiService;
