import axios from 'axios';

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
  baseURL: 'localhost:3333',
});

export default api;