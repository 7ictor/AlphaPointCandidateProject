import AsyncStorage from '@react-native-async-storage/async-storage';

const USERNAME_KEY = 'username';
const CACHE_KEY = 'cache';

export const setUsername = async username => {
  await AsyncStorage.setItem(USERNAME_KEY, username);
};

export const getUsername = async () => {
  return await AsyncStorage.getItem(USERNAME_KEY);
};

export const clearUsername = async () => {
  await AsyncStorage.removeItem(USERNAME_KEY);
};

export const setCache = async cache => {
  await AsyncStorage.setItem(CACHE_KEY, cache);
};

export const getCache = async () => {
  return await AsyncStorage.getItem(CACHE_KEY);
};

export const clearCache = async () => {
  await AsyncStorage.removeItem(CACHE_KEY);
};