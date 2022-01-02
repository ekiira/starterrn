import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Text>What is your name?</Text>
        {name ? <Text>My name is {name}</Text> : null}
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Show name" onPress={() => setName("Jay")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
