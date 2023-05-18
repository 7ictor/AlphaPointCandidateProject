import React, { useEffect } from 'react';
import MainNavigator from './src/navigations/MainNavigator';
import { ReduxProvider, store } from './src/redux/store';
import { getUsername } from './src/utils/storageUtils';
import { login } from './src/redux/authSlice';
import { initializeNetworkListener } from './src/services/networkService';

const App = () => {

  useEffect(() => {
    const bootstrapAsync = async () => {
      const username = await getUsername();
      if (username) {
        store.dispatch(login(username));
      }
    };

    bootstrapAsync();

    initializeNetworkListener();
  }, []);

  return (
    <ReduxProvider>
      <MainNavigator />
    </ReduxProvider>
  );
};

export default App;