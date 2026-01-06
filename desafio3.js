// Definição da classe Heroi
class Heroi {
  // Construtor para inicializar as propriedades: nome, idade e tipo
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar que define o ataque com base no tipo
  atacar() {
    let ataque;

    // Estrutura de decisão para definir a descrição do ataque
    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque desconhecido';
    }

    // Exibição da mensagem de saída formatada
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso:
const heroi1 = new Heroi('Gandalf', 1000, 'mago');
heroi1.atacar(); // Saída: o mago atacou usando magia

const heroi2 = new Heroi('Aragorn', 87, 'guerreiro');
heroi2.atacar(); // Saída: o guerreiro atacou usando espada

const heroi3 = new Heroi('Ryu', 35, 'monge');
heroi3.atacar(); // Saída: o monge atacou usando artes marciais