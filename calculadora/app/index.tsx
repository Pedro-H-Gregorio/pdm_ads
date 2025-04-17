import Botao from "@/components/botao";
import { View, StyleSheet } from "react-native";

export default function Index() {
  const style = StyleSheet.create({
    teclado: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      alignSelf: "center",
      backgroundColor: "#c4c4c4",
      padding: 5,
    },
  });

  const numeros = [
    "C",
    "()",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "",
    "0",
    ",",
    "=",
  ];

  function cliqueNumero(valor: string) {
    console.log("Número clicado:", valor);
  }

  return (
    <View style={style.teclado}>
      {numeros.map((el, index) => (
        <Botao
          key={index}
          valor={el}
          posicao={index}
          clique={cliqueNumero}
          destaque={![0, 1, 2, 3, 7, 11, 15, 19].includes(index)}
        />
      ))}
    </View>
  );
}
