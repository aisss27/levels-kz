import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
  headers: {
    'API-KEY': ''
  }
})

export const companiesApi = {
  getCompanies() {
    return instance.get('companies');
  },
  createCompany(name: string) {
    return instance.post('companies', {name});
  },
  updateCompany(id: string, name: string) {
    return instance.put(`companies/${id}`, {name});
  },
  getSalaries() {
    return instance.get('salaries');
  },
}