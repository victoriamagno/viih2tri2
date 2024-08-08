const nomes = ["Ana", "Gabriela", "Marina", "Marcel", "Alice", "Gian", "Gael"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
