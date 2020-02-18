import axios from 'axios';

export function setTokenHeader(token) {
  if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else delete axios.defaults.headers.common['Authorization'];
}

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    const url = process.env.REACT_APP_API_URI + path;
    return axios[method](url, data)
      .then(res => {
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      });
  });
}
