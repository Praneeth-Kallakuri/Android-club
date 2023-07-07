import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, TextInput, View, TestInput, ToastAndroid } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [id, setID] = useState(2);
  const [getName, setGetName] = useState("");
  const [employee_name, setEmployee_name] = useState("");
  const [salary, setSalary] = useState("");
  const [showMethod, setShowMethod]=useState(null);

  // const handleInputUsername = (e) => {
  //   setUsername(e)
  //   console.log(username)
  // }

  // const handleInputPassword = (e) => {
  //   setPassword(e)
  //   console.log(password)
  // }

 
  const fetchUser = () => {
    fetch(`https://dummy.restapiexample.com/api/users/v1/employees${id}`)
      .then((response) => response.json())
      .then((json) =>
        setGetName(json.data.employee_name + " " + json.data.employee_age)
      );
  };

  const AddUser = () => {
    fetch("https://dummy.restapiexample.com/api/users/v1/employees/", {
      method: "POST",
      body: {
        name: name,
        job: job,
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        ToastAndroid.show(
          "Created object at id: " + json.id,
          ToastAndroid.SHORT
        );
      });
  };

  const UpdateUser = () => {
    fetch("https://dummy.restapiexample.com/api/users/v1/employees/" + id, {
      method: "PUT",
      body: {
        employee_name: employee_name,
        employee_salary: employee_salary,
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        ToastAndroid.show("Updated object", ToastAndroid.SHORT);
      });
  };

  const DeleteUser = () => {
    fetch("https://dummy.restapiexample.com/api" + id, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
      ToastAndroid.show("Deleted object", ToastAndroid.SHORT);
    });
  };

  return (
    <View style={styles.container}>
      {showMethod === null && <Text style={styles.header}>API</Text>}
      {showMethod === "GET" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>Method: Get</Text>
          <TextInput
            placeholder="ID"
            style={styles.input}
            value={id}
            onChangeText={setID}
          />
          <Button
            title="Fetch"
            style={styles.button}
            onPress={fetchUser}
            color="#6EB4D5"
          />
          <Text>Name: {getName}</Text>
        </View>
      )}
      {showMethod === "POST" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>Method: Post</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Salary"
            style={styles.input}
            value={job}
            onChangeText={setJob}
          />
          <Button
            title="Post"
            style={styles.button}
            onPress={AddUser}
            color="#6EB4D5"
          />
        </View>
      )}

      {showMethod === "PUT" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>Method: Put</Text>
          <TextInput
            placeholder="Id"
            style={styles.input}
            value={id}
            onChangeText={setID}
          />
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={employee_namename}
            onChangeText={setEmployee_name}
          />
          <TextInput
            placeholder="Salary"
            style={styles.input}
            value={employee_salary}
            onChangeText={setJob}
          />
          <Button
            title="Post"
            style={styles.button}
            onPress={UpdateUser}
            color="##6EB4D5"
          />
        </View>
      )}
      {showMethod === "DELETE" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>Method: Delete</Text>
          <TextInput
            placeholder="Id"
            style={styles.input}
            value={id}
            onChangeText={setID}
          />
          <Button
            title="Post"
            style={styles.button}
            onPress={DeleteUser}
            color="6EB4D5"
          />
        </View>
      )}
      <View style={styles.optionsButton}>
        <Button
          title="GET"
          style={styles.button}
          onPress={() => setShowMethod("GET")}
          color="#64F"
        />

        <Button
          title="POST"
          style={styles.button}
          onPress={() => setShowMethod("POST")}
          color="#64F"
        />

        <Button
          title="PUT"
          style={styles.button}
          onPress={() => setShowMethod("PUT")}
          color="#64F"
        />

        <Button
          title="DELETE"
          style={styles.button}
          onPress={() => setShowMethod("DELETE")}
          color="#64F"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );



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
      },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#335EA1",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 40,
  },
  input: {
    borderWidth: 2,
    width: 300,
    margin: 10,
    borderStyle: "solid",
    borderColor: "black",
    fontSize: 20,
    padding: 10,
  },

  optionsButton: {
    flexDirection: "row",
    gap: 10,
    position: "absolute",
    bottom: 60,
  },
  methodContainer: {
    position: "absolute",
    top: 70,
  },
});


