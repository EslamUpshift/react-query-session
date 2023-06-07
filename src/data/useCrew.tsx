import {useRefreshByUser} from '../hooks/useRefetchByUser';
import {useQuery} from '@tanstack/react-query';
import {crewEndpoint} from '../network/endpoints/crew';
import {Crew} from '../network/modals/crew.modal';
export const useCrew = (id: Crew['id']) => {
  const query = useQuery(['crew/', id], () => crewEndpoint.getOne(id), {
    enabled: !!id,
  });

  const handleRefresh = async () => {
    await query?.refetch();
  };

  const {isRefetchingByUser, refetchByUser} = useRefreshByUser(handleRefresh);

  return {
    ...query,
    isRefetchingByUser,
    refetchByUser,
  };
};
