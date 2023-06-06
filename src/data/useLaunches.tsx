import {useRefreshByUser} from '../hooks/useRefetchByUser';
import {useQuery} from '@tanstack/react-query';
import {launchEndpoint} from '../network/endpoints';

export const useLaunches = () => {
  const query = useQuery(['launches/latest'], () => launchEndpoint.latest());

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
