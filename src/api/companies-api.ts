import axios from 'axios';

let authToken: string | null = null;

const instance = axios.create({
  baseURL: 'https://onelab-levels-api.vercel.app/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string) => {
  authToken = token;
};

instance.interceptors.request.use(
  (config) => {
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const companiesApi = {
  getCompanies() {
    return instance.get('companies');
  },
  createCompany(name: string) {
    return instance.post('companies', { name });
  },
  updateCompany(id: string, name: string) {
    return instance.put(`companies/${id}`, { name });
  },
  deleteCompany(id:string) {
    return instance.delete(`companies/${id}`);
  },
  getLocations() {
    return instance.get('locations');
  },
  createLocation(name: string) {
    return instance.post('locations', { name });
  },
  updateLocation(id: string, name: string) {
    return instance.put(`locations/${id}`, { name })
  },
  deleteLocation(id:string) {
    return instance.delete(`locations/${id}`);
  },
  getSalaries() {
    return instance.get('salaries');
  },
  createSalary(email: string, location: string, specialization: string, salary: number, yoe: number, yac: number, grade: string) {
    return instance.post('salaries', { email, location, specialization, salary, yoe, yac, grade, });
  },
  updateSalary(id: string, email: string, location: string, specialization: string, salary: number, yoe: number, yac: number, grade: string) {
    return instance.put(`salaries/${id}`, { email, location, specialization, salary, yoe, yac, grade, });
  },
  deleteSalary(id:string) {
    return instance.delete(`salaries/${id}`);
  },
  getAllSpecializations() {
    return instance.get('specializations');
  },
  createSpecialization(name:string) {
    return instance.post('specializations', { name });
  },
  updateSpecialization(id:string, name:string) {
    return instance.put(`specializations/${id}`, { name });
  },
  deleteSpecialization(id:string) {
    return instance.delete(`specializations/${id}`);
  }
};
