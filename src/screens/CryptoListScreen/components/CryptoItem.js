import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CryptoItem = ({ item }) => {
  const {
    nameid,
    name,
    price,
    change_24h,
  } = item;

  const color = Number(change_24h) >= 0 ? 'green' : 'red';
  
  return (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <Text style={styles.name} key={nameid}>{name}</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.exchange}>
          <Text style={styles.price}>{`$${price}`}</Text>
          <Text style={{ color }}>{`${change_24h}%`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 17,
  },
  exchange: {
    alignItems: 'flex-end',
  },
  price: {
    fontWeight: 'bold',
  },
});

export default CryptoItem;