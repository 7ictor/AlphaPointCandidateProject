import { setCache, getCache, clearCache } from "./storageUtils";

const BASE_URL = 'https://api.coinlore.net/api';

export const getCryptoListApi = async () => {
  const cache = await getCache();

  if (!cache) {
    const response = await fetch(`${BASE_URL}/tickers/?start=0&limit=50`);
    const data = await response.json();
    setCache(JSON.stringify(data));
    return data.data;
  }
  const data = JSON.parse(cache);
  return data.data;
};

export const getRealTimeCryptoDataApi = async cryptoId => {
  const response = await fetch(`${BASE_URL}/ticker/?id=${cryptoId}`);
  const data = await response.json();
  return data[0];
};