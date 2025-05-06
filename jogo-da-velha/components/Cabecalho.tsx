import { StyleSheet, Text, View } from "react-native";

interface CabecalhoProps {
  readonly jogador1: string;
  readonly jogador2: string;
  readonly vitoriasJogador1: number;
  readonly vitoriasJogador2: number;
  readonly partidas: number;
  readonly vezJogador: boolean;
}

export function Cabecalho({
  jogador1,
  jogador2,
  vitoriasJogador1,
  vitoriasJogador2,
  partidas,
  vezJogador,
}: CabecalhoProps) {
  const style = StyleSheet.create({
    estado: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 40,
    },
    textoEstado: {
      fontSize: 30,
      textAlign: "center",
    },
  });

  return (
    <>
      <View style={style.estado}>
        <Text style={[style.textoEstado, { flex: 1 }]}>{jogador1}</Text>
        <Text style={[style.textoEstado, { flex: 1 }]}>{vitoriasJogador1}</Text>
        <Text style={[style.textoEstado, { flex: 1 }]}>x</Text>
        <Text style={[style.textoEstado, { flex: 1 }]}>{vitoriasJogador2}</Text>
        <Text style={[style.textoEstado, { flex: 1 }]}>{jogador2}</Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={[style.textoEstado, { marginRight: 10, marginBottom: 20 }]}
        >
          Partidas:
        </Text>
        <Text style={style.textoEstado}>{partidas}</Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={[style.textoEstado, { marginRight: 10, marginBottom: 20 }]}
        >
          Vez:
        </Text>
        <Text style={style.textoEstado}>
          {vezJogador ? jogador1 : jogador2}
        </Text>
      </View>
    </>
  );
}
