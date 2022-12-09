import axiosServices from './axios.service';

const authService = {
  checkAuthorization: (name: any) => {
    return axiosServices.post('/api', { name });
  }
}

export default authService;
