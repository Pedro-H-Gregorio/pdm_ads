import { CPUJogador } from "./CPUJogador";
import { Jogador } from "./Jogador";
import { StatusPartida } from "./EnumStatusPartida";

export class Partida {
  jogador1: Jogador;
  jogador2: CPUJogador;
  tabuleiro: Array<string>;
  vezJogador: boolean;
  status: number;

  constructor(jogador1: Jogador, jogador2: CPUJogador) {
    this.jogador1 = jogador1;
    this.jogador2 = jogador2;
    this.tabuleiro = new Array(9).fill("");
    this.vezJogador = true;
    this.status = StatusPartida.EM_ANDAMENTO;
  }

  getTabuleiro() {
    return this.tabuleiro;
  }
  getVezJogador() {
    return this.vezJogador;
  }
  getStatus() {
    return this.status;
  }
  getJogador1() {
    return this.jogador1;
  }
  getJogador2() {
    return this.jogador2;
  }

  calcularGanhador(tabuleiro: Array<string>) {
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
    for (let linha of linhas) {
      const [a, b, c] = linha;
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

  jogada(posicao: number) {
    const novoTabuleiro = [...this.tabuleiro];
    if (novoTabuleiro[posicao] === "") {
      novoTabuleiro[posicao] = this.vezJogador ? "X" : "O";
      this.tabuleiro = novoTabuleiro;
      const winner = this.calcularGanhador(novoTabuleiro);
      if (winner) {
        if (this.vezJogador) {
          this.status = StatusPartida.VITORIA_JOGADOR;
          this.jogador1.adicionarVitoria();
        } else {
          this.status = StatusPartida.VITORIA_CPU;
          this.jogador2.adicionarVitoria();
        }
      } else {
        this.vezJogador = !this.vezJogador;
      }
    }
  }

  jogadaCPU() {
    this.jogada(this.jogador2.escolherJogada(this.tabuleiro));
  }
}
