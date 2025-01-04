// Variáveis para armazenar o nome do herói e a experiência
let nome = "Nebula";
let xp = 4500;

// Array contendo os níveis e os intervalos de XP correspondentes
let niveis = [
    { limite: 1000, nivel: "Ferro" },
    { limite: 2000, nivel: "Bronze" },
    { limite: 5000, nivel: "Prata" },
    { limite: 7000, nivel: "Ouro" },
    { limite: 8000, nivel: "Platina" },
    { limite: 9000, nivel: "Ascendente" },
    { limite: 10000, nivel: "Imortal" },
    { limite: Infinity, nivel: "Radiante" }
];

// Laço para verificar o nível do herói com base no XP
let nivel;
for (let i = 0; i < niveis.length; i++) {
    if (xp <= niveis[i].limite) {
        nivel = niveis[i].nivel;
        break;
    }
}

// Exibição da mensagem
console.log(`O Herói de nome ${nome} está no nível ${nivel}`);
