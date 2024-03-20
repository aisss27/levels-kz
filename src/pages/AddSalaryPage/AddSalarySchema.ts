import { object, string } from 'yup';
export const addSalarySchema = object({
  yoe: string()
    .typeError('Must be a number')
    .required('Total experience is required'),
  yac: string()
    .typeError('Must be a number')
    .required('Company experience is required'),
  salary: object({
    base: string()
      .typeError('Must be a number')
      .required('Base salary is required'),
    bonus: string().typeError('Must be a number').required('Bonus is required'),
  }),
  location: string().required('Required'),
  specialization: string().required('Required'),
  grade: string().required('Required'),
});
