import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {doLogout} from "./store/actions/store";
import {useDispatch} from "react-redux";


const User = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <Text>user screen</Text>
      <Button title={"Logout"} onPress={() => dispatch(doLogout())} />
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

export default User;