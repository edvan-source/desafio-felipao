// 1. Variáveis: Lista expandida para cobrir todos os níveis
const herois = [
    { nome: "Artur", xp: 900 },      // Ferro
    { nome: "Kael", xp: 1500 },      // Bronze
    { nome: "Jaina", xp: 3000 },     // Prata
    { nome: "Uther", xp: 6000 },     // Ouro
    { nome: "Sylvanas", xp: 7500 },  // Platina
    { nome: "Illidan", xp: 8500 },   // Ascendente
    { nome: "Thrall", xp: 9500 },    // Imortal
    { nome: "Morgana", xp: 11000 }   // Radiante
];

// 2. Laço de Repetição: Percorre todos os heróis da lista
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    // 3. Estruturas de Decisão e Operadores: Lógica de classificação
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // 4. Saída formatada
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}
