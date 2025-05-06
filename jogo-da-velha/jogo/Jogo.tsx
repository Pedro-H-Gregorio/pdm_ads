import { Jogador } from "./Jogador";
import { CPUJogador } from "./CPUJogador";
import { Partida } from "./Partida";

export class Jogo {
  numeroPartidas: number;
  jogador: Jogador;
  CPUJogador: CPUJogador;
  partida: Partida;

  constructor(jogador: string) {
    this.numeroPartidas = 1;
    this.jogador = new Jogador(jogador);
    this.CPUJogador = new CPUJogador();
    this.partida = new Partida(this.jogador, this.CPUJogador);
  }

  adicionarPartida() {
    this.numeroPartidas++;
    this.partida = new Partida(this.jogador, this.CPUJogador);
  }

  getNumeroPartidas() {
    return this.numeroPartidas;
  }

  getJogador() {
    return this.jogador;
  }
  getCPUJogador() {
    return this.CPUJogador;
  }
  getPartida() {
    return this.partida;
  }
}
