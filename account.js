import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const Account = () => {
  return (
    <View style={styles.screen}>
      <Text>account screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Account;
