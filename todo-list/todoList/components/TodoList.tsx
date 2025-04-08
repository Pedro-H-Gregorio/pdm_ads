import { FlatList, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import ListTask from "./ListTask";
import { ITarefa } from "../interfaces/interfaces";

export default function TodoList() {
  const [title, settitle] = useState("");
  const [tasks, setTasks] = useState<ITarefa[]>([]);

  function removeTask(id: string) {
    setTasks(tasks.filter((el) => el.id !== id));
  }

  return (
    <View
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "start",
        justifyItems: "start",
        alignItems: "start",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          display: "inline-flex",
          height: "auto",
          justifyContent: "center",
          alignItems: "stretch",
          width: "100vw",
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "94vw",
          }}
          onChangeText={(el) => settitle(el)}
          placeholder="Digite sua tarefa aqui:"
          defaultValue={title}
        />
        <Button
          title="Salvar"
          onPress={() => {
            const lastId =
              tasks.length > 0 ? parseInt(tasks[tasks.length - 1].id) : 0;
            const novaTarefa: ITarefa = {
              id: String(lastId + 1),
              title: title,
            };
            setTasks([...tasks, novaTarefa]);
            settitle("");
          }}
        />
      </View>
      <ListTask tasks={tasks} removeItem={removeTask} />
    </View>
  );
}
