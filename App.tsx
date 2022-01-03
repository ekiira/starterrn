import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const submitForm = () => {
    if (name && password) {
      setData({
        ...data,
        name,
        password,
      });
      setVisible(true);
      setName("");
      setPassword("");
    } else {
      setVisible(false);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1641157141085-8454fbc33f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        }}
      />
      <View>
        {visible ? (
          <Text style={styles.textField}>
            My name is {data?.name} and my password is {data.password}
          </Text>
        ) : null}
      </View>

      <View style={styles.buttonContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(val) => setName(val)}
          placeholder="Enter Name"
          placeholderTextColor="#fff"
          autoCorrect={true}
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(val) => setPassword(val)}
          placeholder="Enter Password"
          textContentType="password"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />

        <Button title="Submit" onPress={submitForm} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
  },
  textField: {
    color: "#fff",
    marginTop: 30,
  },
  input: {
    borderColor: "gray",
    borderWidth: 2,
    marginBottom: 20,
    width: 300,
    color: "#fff",
    padding: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
