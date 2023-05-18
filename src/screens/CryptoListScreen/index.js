import React, { useEffect, useState, useMemo, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import OfflineNotice from '../../components/OfflineNotice';
import CryptoList from './components/CryptoList';
import { logoutService } from '../../services/authService';
import { getCryptos } from '../../services/cryptoService';

const CryptoListScreen = ({ navigation }) => {
  const [cryptos, setCryptos] = useState([]);
  const [filter, setFilter] = useState({ input: '', submitted: '' });
  const username = useSelector(state => state.auth.username);
  const isOnline = useSelector(state => state.auth.isOnline);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Logout" onPress={handleLogout} />
      ),
    });
  }, []);

  useEffect(() => {
    const fetchCryptos = async () => {
      const fetchedCryptos = await getCryptos();
      setCryptos(fetchedCryptos);
    };

    fetchCryptos();
  }, []);

  const handleLogout = async () => {
    const isLoggedOut = await logoutService();
    if (isLoggedOut) {
      dispatch(logout());
    }
    else {
      console.error('Logout failed');
    }
  };

  const handleNavigation = async (cryptoId, name) => {
    if (isOnline) {
      navigation.navigate('RealTimeChartScreen', { cryptoId, name });
    }
  };

  const handleFilterPress = () => {
    const newInput = isNaN(Number(filter.input)) ? '' : filter.input;
    setFilter({ ...filter, submitted: newInput });
  };

  const filteredCryptos = useMemo(
    () => {
      if (filter.submitted !== '' && !isNaN(Number(filter.submitted))) {
        return cryptos.filter(crypto => Number(crypto.change_24h) >= Number(filter.submitted));
      }
      
      return cryptos;
    },
    [filter.submitted, cryptos]
  );

  return (
    <View style={styles.container}>
      {!isOnline && (<OfflineNotice />)}
      <View style={styles.header}>
        <Text
          style={styles.text}>
          Welcome, {username}!
        </Text>
        <View style={styles.filter}>
          <TextInput
            style={styles.input}
            value={filter.input}
            onChangeText={text => setFilter({ ...filter, input: text })}
            placeholder="%"
          />
          <TouchableOpacity style={styles.button} onPress={handleFilterPress}>
            <Text style={styles.buttonText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CryptoList cryptos={filteredCryptos} onSelect={handleNavigation}/>
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
  filter: {
    flexDirection: 'row',
  },
  input: {
    height: 35,
    width: '20%',
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#eceef5',
    color: '#000',
  },
  button: {
    height: 35,
    width: '20%',
    borderWidth: 1,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#eceef5',
    fontWeight: 'bold',
  },
});

export default CryptoListScreen;