import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RealTimeChart from './components/RealTimeChart';
import { getRealTimeCryptoData } from '../../services/cryptoService';
import { useSelector } from 'react-redux';
import OfflineNotice from '../../components/OfflineNotice';

const RealTimeChartScreen = ({ route }) => {
  const { cryptoId, name } = route.params;
  const [realTimeData, setRealTimeData] = useState([]);
  const [counter, setCounter] = useState(30);
  const [counterLimit, setCounterLimit] = useState(5);
  const isOnline = useSelector(state => state.auth.isOnline);

  const decrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const decrementCounterLimit = () => {
    setCounterLimit((prevCounterLimit) => prevCounterLimit - 1);
  };

  useEffect(() => {
    let interval;

    const fetchData = async () => {
      const fetchedData = await getRealTimeCryptoData(cryptoId);
      setRealTimeData(prevState => [...prevState, fetchedData]);
    };

    if (isOnline) {
      interval = setInterval(() => {
        if (counterLimit === 0) {
          clearInterval(interval);
        }
        else {
          if (counter > 0) {
            decrementCounter();
          } 
          else {
            setCounter(30);
            decrementCounterLimit();
            fetchData();
          }
        }
      }, 1000);
    } 
    else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isOnline, counter, counterLimit]);

  return (
    <View style={styles.container}>
      {!isOnline && (<OfflineNotice />)}
      <View style={styles.header}>
        <Text
          style={styles.text}>
          {name}
        </Text>
        <Text
          style={styles.timer}>
          Timer: {counterLimit === 0 ? 'Finished' : counter}
        </Text>
      </View>
      <RealTimeChart data={realTimeData.map(obj => ({ ...obj }))}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2a41cb',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#eceef5',
    paddingBottom: 10,
  },
  timer: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: 'coral',
  },
});

export default RealTimeChartScreen;