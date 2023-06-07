import api from '../api';
import {Crew} from '../modals/crew.modal';

export const crewEndpoint = {
  getOne: (id: Crew['id']) =>
    api.get(`crew/${id}`).then(res => {
      return res.data as Crew;
    }),
};
