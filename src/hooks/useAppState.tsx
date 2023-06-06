import {useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';

export function useAppState(onChange: (status: AppStateStatus) => void) {
  useEffect(() => {
    const subscribtion = AppState.addEventListener('change', onChange);
    return () => {
      subscribtion.remove();
    };
  }, [onChange]);
}
