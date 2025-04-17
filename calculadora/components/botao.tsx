import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface IBotaoProps {
  valor: string;
  posicao: number;
  clique: Function;
  destaque: boolean;
}

function Botao({ valor, posicao, clique, destaque }: IBotaoProps) {
  const style = StyleSheet.create({
    botao: {
      backgroundColor: destaque ? "rgb(211, 209, 209)" : "rgb(28 28 28)",
      width: "20%",
      aspectRatio: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      margin: 1,
    },
    texto: {
      fontSize: 20,
      fontWeight: "bold",
      color: destaque ? "black" : "white",
    },
  });

  return (
    <TouchableOpacity onPress={() => clique(valor)} style={style.botao}>
      <Text style={style.texto}>{valor}</Text>
    </TouchableOpacity>
  );
}

export default Botao;
