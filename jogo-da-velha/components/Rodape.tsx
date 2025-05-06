import { StyleSheet, Text, View } from "react-native";

interface RodapeProps {
  readonly jogador: string;
}

export function Rodape({ jogador }: RodapeProps) {
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
      marginRight: 10,
      marginBottom: 20,
      marginTop: 20,
    },
  });

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <Text style={style.textoEstado}>Ganhador:</Text>
      <Text style={style.textoEstado}>{jogador}</Text>
    </View>
  );
}
