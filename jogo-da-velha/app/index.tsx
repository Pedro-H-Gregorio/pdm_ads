import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { Tabuleiro } from "@/components/Tabuleiro";
import { StatusPartida } from "@/jogo/EnumStatusPartida";
import { Jogo } from "@/jogo/Jogo";
import { Partida } from "@/jogo/Partida";
import { useState, useEffect, useRef } from "react";
import { Button, StyleSheet, View, useWindowDimensions } from "react-native";

export default function Index() {
  const { width } = useWindowDimensions();
  const lado: number = Math.floor((width - 20) / 3);

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
  });

  let jogoRef = useRef<Jogo>(new Jogo("Pedro"));
  let partidaRef = useRef<Partida>(jogoRef.current.getPartida());

  const jogador1 = jogoRef.current.getJogador().getNome();
  const cpu = jogoRef.current.getCPUJogador().getNome();

  const [vitoriasJogador, setVitoriasJogador] = useState<number>(
    jogoRef.current.getJogador().getVitorias()
  );
  const [vitoriasCpu, setVitoriasCpu] = useState<number>(
    jogoRef.current.getCPUJogador().getVitorias()
  );
  const [numPartidas, setNumPartidas] = useState<number>(
    jogoRef.current.getNumeroPartidas()
  );

  const [tabuleiro, setTabuleiro] = useState<string[]>(
    partidaRef.current.getTabuleiro()
  );
  const [vezJogador, setVezJogador] = useState<boolean>(
    partidaRef.current.getVezJogador()
  );
  const [statusPartida, setStatusPartida] = useState<number>(
    partidaRef.current.getStatus()
  );

  useEffect(() => {
    if (partidaRef.current.getVezJogador() === false) {
      partidaRef.current.jogadaCPU();
      setTabuleiro(partidaRef.current.getTabuleiro());
      setVezJogador(partidaRef.current.getVezJogador());
      monitorarStatusPartida();
    }
  }, [vezJogador]);

  useEffect(() => {
    if (statusPartida === StatusPartida.VITORIA_CPU) {
      setVitoriasCpu(jogoRef.current.CPUJogador.getVitorias());
    } else if (statusPartida === StatusPartida.VITORIA_JOGADOR) {
      setVitoriasJogador(jogoRef.current.jogador.getVitorias());
    }
  }, [statusPartida]);

  function monitorarStatusPartida() {
    if (partidaRef.current.getStatus() != statusPartida) {
      setStatusPartida(partidaRef.current.getStatus());
    }
  }

  function finalizaPartida() {
    jogoRef.current.adicionarPartida();
    setNumPartidas(jogoRef.current.getNumeroPartidas());
    partidaRef.current = jogoRef.current.getPartida();
    setTabuleiro(partidaRef.current.getTabuleiro());
    setVezJogador(partidaRef.current.getVezJogador());
    setStatusPartida(partidaRef.current.getStatus());
  }

  function joga(posicao: number) {
    partidaRef.current.jogada(posicao);
    setTabuleiro(partidaRef.current.getTabuleiro());
    setVezJogador(partidaRef.current.getVezJogador());
    monitorarStatusPartida();
  }

  return (
    <View style={style.container}>
      <Cabecalho
        jogador1={jogador1}
        vitoriasJogador1={vitoriasJogador}
        jogador2={cpu}
        vitoriasJogador2={vitoriasCpu}
        partidas={numPartidas}
        vezJogador={vezJogador}
      />

      <Tabuleiro
        lado={lado}
        tabuleiro={tabuleiro}
        jogada={joga}
        disable={statusPartida != StatusPartida.EM_ANDAMENTO}
        vezJogador={vezJogador}
      />

      {statusPartida != StatusPartida.EM_ANDAMENTO &&
        statusPartida != StatusPartida.EMPATE && (
          <>
            <Rodape
              jogador={
                statusPartida == StatusPartida.VITORIA_JOGADOR ? jogador1 : cpu
              }
            />
            <Button
              title="Jogar de novo"
              onPress={() => {
                finalizaPartida();
              }}
            />
          </>
        )}
    </View>
  );
}
