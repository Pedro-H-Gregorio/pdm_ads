import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IQuadradoProps {
  readonly value: string;
  readonly disable: boolean;
  readonly position: number;
  readonly funcao: Function;
  readonly lado: number;
}

export default function Quadrado({
  value,
  disable,
  position,
  funcao,
  lado,
}: IQuadradoProps) {
  const style = StyleSheet.create({
    quadrado: {
      backgroundColor: "rgb(165 165 165)",
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      height: lado,
      width: lado,
      borderWidth: 1,
      borderColor: "black",
    },
    titulo: { fontSize: 50, fontWeight: "bold" },
  });

  return (
    <TouchableOpacity onPress={() => funcao(position)} disabled={disable}>
      <View style={style.quadrado}>
        <Text style={style.titulo}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}
