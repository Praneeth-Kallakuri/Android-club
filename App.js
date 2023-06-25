import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TestInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const handleInputUsername = (e) => {
    setUsername(e)
    console.log(username)
  }

  const handleInputPassword = (e) => {
    setPassword(e)
    console.log(password)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Sign-In</Text>
      <View style={styles.input}>
        <TextInput onChangeText={e => handleInputUsername(e)} defaultValue={username}  placeholder="Enter Username" />
        <TextInput onChangeText={e => handleInputPassword(e)} defaultValue={password}  placeholder="Enter Password" secureTextEntry />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2b6e0',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  txt: {
    height: 100,
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 30,
    color: '#000000',
    //paddingRight: 300,
    paddingBottom: 50,
  },
  input: {
      height: 20,
      fontSize: 20
  }
});


