import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MiniOfflineSign = () => {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
};

class OfflineNotice extends PureComponent {
  render() {
      return <MiniOfflineSign />;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    elevation: 10,
  },
  offlineText: { 
    color: '#fff'
  }
});

export default OfflineNotice;