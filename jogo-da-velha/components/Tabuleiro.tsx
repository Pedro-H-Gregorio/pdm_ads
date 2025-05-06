import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

interface TabuleiroProps {
  readonly lado: number;
  readonly tabuleiro: readonly string[];
  readonly vezJogador: boolean;
  readonly disable: boolean;
  readonly jogada: (posicao: number) => void;
}

export function Tabuleiro({
  lado,
  tabuleiro,
  vezJogador,
  disable,
  jogada,
}: TabuleiroProps) {
  return (
    <View style={[styles.container, { width: lado * 3 }]}>
      {tabuleiro.map((valor, index) => (
        <Quadrado
          key={100 + index}
          position={index}
          value={valor}
          disable={disable || !vezJogador}
          funcao={jogada}
          lado={lado}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
  },
});
