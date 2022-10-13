import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import SmartySDK from 'smartystreets-javascript-sdk';


const Account = () => {

  const SmartyCore = SmartySDK.core;
  const Lookup = SmartySDK.usAutocompletePro.Lookup;


// US Autocomplete Pro only supports using Embedded Keys
  let key = 'get key ';
  const credentials = new SmartyCore.SharedCredentials(key);


// The appropriate license values to be used for your subscriptions
// can be found on the Subscription page of the account dashboard.
// https://www.smarty.com/docs/cloud/licensing
  let clientBuilder = new SmartyCore.ClientBuilder(credentials).withLicenses(["us-autocomplete-pro-cloud"]);
  let client = clientBuilder.buildUsAutocompleteProClient();

  const logSuggestions = (response, message) => {
    console.log(message);
    console.log(response.result);
    console.log("*********************");
  }

  const handleRequest = async (lookup, lookupType) => {
    try {
      const results = await client.send(lookup);
      logSuggestions(results, lookupType);
    } catch(err) {
      console.log(err)
    }
  }

  const test = async () => {
    const lookup = new Lookup("ave");
    await handleRequest(lookup, "Simple Request");
  }

  test();


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
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    width: 200,
    height: 25

  }
})

export default Account;
