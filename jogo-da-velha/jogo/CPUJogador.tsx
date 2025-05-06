import { Jogador } from "./Jogador";

export class CPUJogador extends Jogador {
  constructor() {
    super("CPU");
  }

  escolherJogada(tabuleiro: Array<string>) {
    let camposLivres: number[] = [];
    tabuleiro.forEach(
      (element, index) => element == "" && camposLivres.push(index)
    );
    let jogada = this.escolheJogada(camposLivres);
    return jogada;
  }

  escolheJogada(campos: Array<number>) {
    let jogada = Math.round(Math.random() * 10);
    while (!campos.includes(jogada) && campos.length > 0) {
      jogada = Math.round(Math.random() * 10);
    }
    return jogada;
  }
}
