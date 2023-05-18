import NetInfo from '@react-native-community/netinfo';
import { updateNetworkStatus } from '../redux/authSlice';
import { store } from '../redux/store';

export const initializeNetworkListener = () => {
  NetInfo.addEventListener((state) => {
    store.dispatch(updateNetworkStatus(state.isConnected));
  });
};