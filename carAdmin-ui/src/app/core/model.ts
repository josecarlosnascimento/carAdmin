export class Categoria{
    codigo: number;
    descricao: string;
    valorDiaria: number;
    valorMulta: number;
}

export class Veiculo{
    codigo: number;
    marca: string;
    modelo: string;
    chassi: string;
    ano: number;
    cor: Cor;
    categoria: Categoria;
    tipo: Tipo;
}

export class Cor{
    codigo: number;
    descricao: string;
}
export class Tipo{
    codigo: number;
    descricao: string;
}