import React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView, Modal} from 'react-native';
import {doLogout} from "./store/actions/store";
import {useDispatch} from "react-redux";
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import axios from 'axios';


const User = () => {
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();

  const [modalVisible, setModalVisible] = React.useState(false);
  const [facebookappid, setfacebookappid] = React.useState('nothing');
  const [googleAppId, setGoogleAppId] = React.useState('no google app id');

  const source = {
    html: "<div> <h1 style='color: red'>i'm inside html</h1> <a href='https://www.contractpal.com'>click here</a> </div>"
  }


  const makeRequest = () => {
    axios.post("https://secure.patronaccess.cloud/cpsweb/220/api/discovery.do",{
      username: 'tj',
      password: 'fwaliefjwliefj',

    }).then(resp => {
      setfacebookappid(resp.data.facebookAppId);
      setGoogleAppId(resp.data.googleAppId);
    });
  }

  return (
    <View style={styles.screen}>
      <ScrollView>
        <Text>user screen</Text>
        <Image source={require('./assets/halloweenpic.jpg')} style={{width: '100%', height: 100}}/>
        <RenderHtml
          contentWidth={width}
          source={source}
        />

        <Text>Facebook app ID: {facebookappid}</Text>
        <Text>Google APP ID: {googleAppId}</Text>
        <Button title={"Logout"} onPress={() => dispatch(doLogout())}/>
        <Button title={modalVisible ? 'Close modal' : 'Show modal'} onPress={() => setModalVisible(!modalVisible)}/>
        <Button title={"get facebook appid"} onPress={makeRequest} />
      </ScrollView>


      <Modal animationType="slide" visible={modalVisible}
             onRequestClose={() => setModalVisible(false)}>
        <View style={styles.screen}>
          <Text>this is inside the modal</Text>

          <Button title={"close modal"} onPress={() => setModalVisible(false)}/>
        </View>
      </Modal>
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