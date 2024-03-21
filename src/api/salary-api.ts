import { instance } from './axios-instance.ts';

export const salaryApi = {
  getSalaries() {
    return instance.get('salaries');
  },

  createSalary(
    email: string | null,
    location: { name: string },
    specialization: { name: string },
    company: { name: string },
    salary: {
      base: number;
      bonus: number;
    },
    yoe: number,
    yac: number,
    grade: string,
    created: string
  ) {
    return instance.post('salaries', {
      email,
      location,
      specialization,
      company,
      salary,
      yoe,
      yac,
      grade,
      created,
    });
  },

  updateSalary(
    id: string,
    email: string,
    location: string,
    specialization: string,
    salary: number,
    yoe: number,
    yac: number,
    grade: string
  ) {
    return instance.put(`salaries/${id}`, {
      email,
      location,
      specialization,
      salary,
      yoe,
      yac,
      grade,
    });
  },

  deleteSalary(id: string) {
    return instance.delete(`salaries/${id}`);
  },
};
