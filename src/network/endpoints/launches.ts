import api from '../api';
import {Launch, LaunchParams} from '../modals/launch.modal';
import {ListResponse} from '../modals/list.modal';

export const launchEndpoint = {
  latest: () =>
    api.get('launches/latest').then(res => {
      return res.data as Launch;
    }),
  query: (params: LaunchParams, page: number) =>
    api.post('launches/query', {...params, options: {page}}).then(res => {
      return res.data as ListResponse<Launch>;
    }),
};
