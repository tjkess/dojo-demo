import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert,} from 'react-native';
import {useDispatch} from "react-redux";
import {doLogin} from "./store/actions/store";


const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  const login = () => {
    if(username.length === 0) {
      Alert.alert('username is required', '', [{text: 'OK'}, {
        text: 'wassup',
        onPress: () => console.log('you pressed me')
      }]);
      return;
    }
    if(password.length === 0){
      Alert.alert('password is required', '', [{text: 'OK'}]);
      return;
    }
    dispatch(doLogin('234ffwaefijsef'));
  }


  return (
    <View style={styles.screen}>
      <Text>Dojo demo</Text>
      <Text>Username</Text>
      <TextInput value={username} onChangeText={setUsername} style={styles.input} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} style={styles.input} secureTextEntry={true}/>

      <Button title={"Login"} onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    width: 200,
    height: 25

  }
})

export default LoginScreen;