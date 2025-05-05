import Quadrado from "@/components/Quadrado";
import { Tabuleiro } from "@/components/Tabuleiro";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Index() {
  const style = StyleSheet.create({
    tabuleiro: {
      display: "grid",
      justifyContent: "space-evenly",
      justifyItems: "stretch",
      alignItems: "stretch",
      alignContent: "center",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateCows: "repeat(3, 1fr)",
      backgroundColor: "black",
      margin: 0,
      padding: 0,
    },
    titulo: { fontSize: 40, fontWeight: "bold" },
  });

  let [tabuleiro, setTabuleiro] = useState(new Array(9).fill(""));
  let [vezJogador, setVezJogador] = useState(true);
  let [status, setStatus] = useState(0);

  function lidarComVez(posicao: number) {
    const novoTabuleiro = [...tabuleiro];
    if (novoTabuleiro[posicao] === "") {
      novoTabuleiro[posicao] = "X";
      setTabuleiro(novoTabuleiro);
      const winner = calculateWinner(novoTabuleiro);
      if (winner) {
        setStatus(1);
      } else {
        setVezJogador(false);
      }
    }
  }

  function escolheJogada(campos: Array<number>) {
    let jogada = Math.round(Math.random() * 10);
    while (!campos.includes(jogada) && campos.length > 0) {
      jogada = Math.round(Math.random() * 10);
    }
    return jogada;
  }

  function jogadaCPU(tabuleiro: Array<String>) {
    let camposLivres: number[] = [];
    tabuleiro.forEach(
      (element, index) => element == "" && camposLivres.push(index)
    );
    let jogada = escolheJogada(camposLivres);
    let novoTabuleiro = [...tabuleiro];
    novoTabuleiro[jogada] = "O";
    setTabuleiro(novoTabuleiro);
    const winner = calculateWinner(novoTabuleiro);
    if (winner) {
      setStatus(1);
    } else {
      setVezJogador(true);
    }
  }

  function calculateWinner(tabuleiro: Array<String>) {
    const linhas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < linhas.length; i++) {
      const [a, b, c] = linhas[i];
      if (
        tabuleiro[a] &&
        tabuleiro[a] === tabuleiro[b] &&
        tabuleiro[a] === tabuleiro[c]
      ) {
        return tabuleiro[a];
      }
    }
    return null;
  }

  useEffect(() => {
    if (!vezJogador) {
      jogadaCPU(
        tabuleiro
      );
    }
  }, [vezJogador]);

  function definirTitulo(vez: boolean, status: number, tabuleiro: string[]) {
    if (tabuleiro.some((el) => el == "")) {
      return (
        (status ? `Ganhador: ` : `Vez: `) + (vezJogador ? "Jogador" : "CPU")
      );
    } else return "Empate";
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={style.titulo}>
        {definirTitulo(vezJogador, status, tabuleiro)}
      </Text>
      <View style={style.tabuleiro}>
        {tabuleiro.map((valor, index) => (
          <Quadrado
            key={index}
            value={valor}
            disable={!vezJogador || status != 0}
            position={index}
            tabuleiro={tabuleiro}
            setVez={setVezJogador}
            setStatus={setStatus}
            setTabuleiro={setTabuleiro}
            funcao={lidarComVez}
          />
        ))}
      </View>
      <Button
        title="Jogar de novo"
        disabled={status == 0 || tabuleiro.some((el) => el == "")}
        onPress={() => {
          setTabuleiro(tabuleiro.fill(""));
          setVezJogador(true);
          setStatus(0);
        }}
      />
    </View>
  );
}
