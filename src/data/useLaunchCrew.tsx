import {useQueries} from '@tanstack/react-query';
import {crewEndpoint} from '../network/endpoints/crew';
import {Launch} from '../network/modals/launch.modal';
export const useLaunchCrew = (members: Launch['crew']) => {
  const query = useQueries({
    queries: members?.map(crew => {
      return {
        queryKey: ['crew/', crew],
        queryFn: () => crewEndpoint.getOne(crew),
        enabled: !!members,
      };
    }),
  });

  return query;
};
