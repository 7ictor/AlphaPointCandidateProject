import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginForm from './components/LoginForm';
import { useDispatch } from 'react-redux';
import { loginService } from '../../services/authService';
import { login } from '../../redux/authSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = async (username) => {
    const isAuthenticated = await loginService(username);
    if (isAuthenticated) {
      dispatch(login(username));
    }
    else {
      console.error('Authentication failed');
    }
  };

  return (
    <View style={styles.container}>
      <LoginForm onSubmit={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fffdfa',
  },
});

export default LoginScreen;
