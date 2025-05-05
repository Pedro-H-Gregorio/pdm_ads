export class Tabuleiro {
  constructor() {}

  escolheJogada(campos: Array<number>) {
    let jogada = Math.round(Math.random() * 10);
    while (!campos.includes(jogada) && campos.length > 0) {
      jogada = Math.round(Math.random() * 10);
    }
    return jogada;
  }

  jogadaCPU(
    tabuleiro: Array<String>,
    setTabuleiro: Function,
    setStatus: Function,
    setVezJogador: Function
  ) {
    let camposLivres: number[] = [];
    tabuleiro.forEach(
      (element, index) => element == "" && camposLivres.push(index)
    );
    let jogada = this.escolheJogada(camposLivres);
    let novoTabuleiro = [...tabuleiro];
    novoTabuleiro[jogada] = "O";
    setTabuleiro(novoTabuleiro);
    const winner = this.calculateWinner(novoTabuleiro);
    if (winner) {
      setStatus(1);
    } else {
      setVezJogador(true);
    }
  }

  calculateWinner(tabuleiro: Array<String>) {
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

  definirTitulo(vez: boolean, status: number, tabuleiro: string[]) {
    if (tabuleiro.some((el) => el == "")) {
      return (status ? `Ganhador: ` : `Vez: `) + (vez ? "Jogador" : "CPU");
    } else return "Empate";
  }

  lidarComVez(
    posicao: number,
    tabuleiro: Array<String>,
    setTabuleiro: Function,
    setStatus: Function,
    setVezJogador: Function
  ) {
    const novoTabuleiro = [...tabuleiro];
    if (novoTabuleiro[posicao] === "") {
      novoTabuleiro[posicao] = "X";
      setTabuleiro(novoTabuleiro);
      const winner = this.calculateWinner(novoTabuleiro);
      if (winner) {
        setStatus(1);
      } else {
        setVezJogador(false);
      }
    }
  }
}
