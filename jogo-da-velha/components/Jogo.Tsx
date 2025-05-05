import { Jogador } from "./Jogador";
import { CPUJogador } from "./CPUJogador";
import { Partida } from "./Partida";

export class Jogo {
  numeroPartidas: number;
  jogador: Jogador;
  CPUJogador: CPUJogador;
  partida: Partida;

  constructor(jogador: string) {
    this.numeroPartidas = 0;
    this.jogador = new Jogador(jogador);
    this.CPUJogador = new CPUJogador();
  }

  adicionarPartida() {
    this.numeroPartidas++;
    this.partida = new Partida(this.jogador, this.CPUJogador);
  }

  reiniciarJogo() {
    this.numeroPartidas = 0;
    this.jogador.reiniciarPontos();
    this.CPUJogador.reiniciarPontos();
  }

  getNumeroPartidas() {
    return this.numeroPartidas;
  }
}
