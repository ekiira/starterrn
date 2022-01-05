import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

interface IDataProps {
  name: string;
  age: number;
  id: string;
}

export default function App() {
  const [data, setData] = useState<Array<IDataProps>>([
    {
      name: "Rachel Jay",
      age: 21,
      id: "219",
    },
    {
      name: "Bolanle Jay",
      age: 18,
      id: "220",
    },
    {
      name: "Seun A",
      age: 15,
      id: "221",
    },
    {
      name: "Damola A",
      age: 33,
      id: "222",
    },
    {
      name: "Oluwatosin",
      age: 89,
      id: "223",
    },
    {
      name: "Victoria",
      age: 34,
      id: "224",
    },
  ]);

  const pressHandler = (id: string) => {
    setData((prevState) => {
      return prevState.filter(item => item.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#000",
    height: "100%",
  },
  header: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
  item: {
    color: "#000",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 50,
    margin: 10,
  },
});
