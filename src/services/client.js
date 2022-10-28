import axios from "axios";
class Client {
  constructor() {
    this.baseUrl = "https://api.bitpin.org/v1";
    this.instance = axios.create({
      baseURL: this.baseUrl,
      headers: {},
    });
  }
  get(endpoint, config = {}) {
    return this.instance.get(endpoint, config);
  }  
}

export const client = new Client();
