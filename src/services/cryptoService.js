import { getCryptoListApi, getRealTimeCryptoDataApi } from '../utils/apiUtils';

const getLocalTime = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

export const getCryptos = async () => {
  try {
    const cryptoList = await getCryptoListApi();
    return cryptoList.map(crypto => ({ 
      id: crypto.id, 
      nameid: crypto.nameid, 
      name: crypto.name, 
      price: crypto.price_usd, 
      change_24h: crypto.percent_change_24h 
    }));
  } catch(error) {
    console.error(error);
    return [];
  }
};

export const getRealTimeCryptoData = async cryptoId => {
  try {
    const timestamp = Date.now();
    const { price_usd } = await getRealTimeCryptoDataApi(cryptoId);
    const numOfDecimals = (num => num.split('.')[1].length);
    return { 
      price: price_usd, 
      value: price_usd.replaceAll('.', ''), 
      decimals: numOfDecimals(price_usd),
      label: getLocalTime(timestamp),
      dataPointText: `$${price_usd}`,
    };
  } catch(error) {
    console.error(error);
    return {};
  }
};