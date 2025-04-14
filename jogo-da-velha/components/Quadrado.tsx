import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IQuadradoProps {
  value: String;
  disable: boolean;
  position: Number;
  funcao: Function;
}

export default function Quadrado({
  value,
  disable,
  position,
  funcao,
}: IQuadradoProps) {
  const style = StyleSheet.create({
    quadrado: {
      backgroundColor: "rgb(165 165 165)",
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      height: "10rem",
      width: "10rem",
      margin: 5,
    },
    titulo: { fontSize: "xxx-large", fontWeight: "bold" },
  });

  return (
    <TouchableOpacity onPress={() => funcao(position)} disabled={disable}>
      <View style={style.quadrado}>
        <Text style={style.titulo}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}
