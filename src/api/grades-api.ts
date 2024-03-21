import { instance } from './axios-instance.ts';

export const gradesApi = {
  getGrades() {
    return instance.get('grades');
  },
};
