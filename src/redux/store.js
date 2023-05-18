import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export { store, ReduxProvider };