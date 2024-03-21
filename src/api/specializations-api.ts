import { instance } from './axios-instance.ts';

export const specializationsApi = {
  getAllSpecializations() {
    return instance.get('specializations');
  },

  createSpecialization(name: string) {
    return instance.post('specializations', { name });
  },

  updateSpecialization(id: string, name: string) {
    return instance.put(`specializations/${id}`, { name });
  },

  deleteSpecialization(id: string) {
    return instance.delete(`specializations/${id}`);
  },
};
