export type TotalTrabalhadoProps = {
    title: string;
    valor: string;
    color: string;
};

export type RetornoApiProps = {
    id: number;
    entrada: string;
    almoco: string;
    volta_almoco: string;
    saida: string;
    total: string;
    diferenca: string;
    mensagem: string;
    error: boolean;
};

export type RegistrarEntrada = {
    id?: number;
    hora: string;
    data: string;
};

export type RegistrarOutrosHorarios = {
    id: string;
    data: string;
    ponto: string;
};

export type StateTelaProps = {
    id: number;
    hora: string;
    title: string;
    totalTrabalhado: string;
    diferenca: string;
};

export type StateTelaError = {
    error: boolean;
    mensagem: string;
};
