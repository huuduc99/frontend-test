import axiosServices from './axios.service';

const authService = {
  checkAuthorization: (name: any) => {
    return axiosServices.post('/api', { name });
  },

  login: (values: any) => {
    return axiosServices.post('/api/login', values);
  }
}

export default authService;
