
import axios from 'axios';

const api = axios.create({
  baseURL:'http://127.0.0.1:4523/mock/926698',
  timeout: 3000, //延迟时间
  headers: {
    "User-Agent": "apifox/1.0.0 (https://www.apifox.cn)",
    "content-Type": "application/json"
  }
})

export default api
