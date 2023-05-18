import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, View, Text } from 'react-native';
import CryptoItem from './CryptoItem';

const CryptoList = ({ cryptos, onSelect }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {
          onSelect(item.id, item.name);
        }}
      >
        <CryptoItem item={item}/>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cryptos}
        renderItem={renderItem}
        keyExtractor={(crypto) => crypto.id}
        ItemSeparatorComponent={() => (
          <View
            style={{height: 1, backgroundColor: '#ddd'}}></View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#fffdfa',
  },
});

export default CryptoList;