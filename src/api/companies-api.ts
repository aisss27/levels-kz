import { instance } from './axios-instance.ts';

export const companiesApi = {
  getCompanies() {
    return instance.get('companies');
  },

  getCompanyById(id: string) {
    return instance.get(`companies/${id}`);
  },

  createCompany(name: string) {
    return instance.post('companies', { name });
  },

  updateCompany(id: string, name: string) {
    return instance.put(`companies/${id}`, { name });
  },

  deleteCompany(id: string) {
    return instance.delete(`companies/${id}`);
  },
};
