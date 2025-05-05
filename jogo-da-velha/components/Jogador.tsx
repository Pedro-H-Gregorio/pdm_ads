export class Jogador {
  nome: string;
  vitorias: number;

  constructor(nome: string) {
    this.nome = nome;
    this.vitorias = 0;
  }

  getNome() {
    return this.nome;
  }
  getVitorias() {
    return this.vitorias;
  }
  adicionarVitoria() {
    this.vitorias++;
  }
  reiniciarPontos() {
    this.vitorias = 0;
  }
}
