import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { ITarefa } from "../interfaces/interfaces";

interface ListTaskProps {
  tasks: ITarefa[];
  removeItem: Function;
}

export default function ListTask({ tasks, removeItem }: ListTaskProps) {
  return (
    <View style={style.content}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={style.item}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Feather name="trash-2" size={20} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const style = StyleSheet.create({
  item: {
    backgroundColor: "#999",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  content: {
    width: "100vw",
  },
});
