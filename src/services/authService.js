import { setUsername, clearUsername, clearCache } from '../utils/storageUtils';

export const loginService = async (username) => {
  if (username.trim() !== '') {
    try {
      await setUsername(username);
      return true;
    } catch(error) {
      console.error(error);
      return false;
    }
  }
  
  return false;
};

export const logoutService = async () => {
  try {
    await clearUsername();
    await clearCache();
    return true;
  } catch(error) {
    console.error(error);
    return false;
  }
};