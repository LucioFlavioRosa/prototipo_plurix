// Dados mockados de fornecedores para protótipo de dashboard de gestão/auditoria de cotações
const fornecedores = [
  {
    id: 1,
    nome: "AgroLeite Ltda",
    cnpj: "12.345.678/0001-90",
    categoria: ["Leite", "Derivados"],
    historico_precos: {
      "Leite Integral": [
        { data: "2023-07", preco: 2.85 },
        { data: "2023-08", preco: 2.92 },
        { data: "2023-09", preco: 2.95 },
        { data: "2023-10", preco: 3.01 },
        { data: "2023-11", preco: 3.10 },
        { data: "2023-12", preco: 3.05 },
        { data: "2024-01", preco: 3.12 },
        { data: "2024-02", preco: 3.18 },
        { data: "2024-03", preco: 3.22 },
        { data: "2024-04", preco: 3.30 },
        { data: "2024-05", preco: 3.28 },
        { data: "2024-06", preco: 3.35 }
      ]
    },
    tempo_medio_resposta: 2.1,
    taxa_aprovacao: 87,
    avaliacao: 4.7
  },
  {
    id: 2,
    nome: "Grãos Brasil S/A",
    cnpj: "98.765.432/0001-12",
    categoria: ["Soja", "Milho"],
    historico_precos: {
      "Soja": [
        { data: "2023-07", preco: 145.00 },
        { data: "2023-08", preco: 147.50 },
        { data: "2023-09", preco: 150.20 },
        { data: "2023-10", preco: 153.00 },
        { data: "2023-11", preco: 151.80 },
        { data: "2023-12", preco: 152.10 },
        { data: "2024-01", preco: 155.00 },
        { data: "2024-02", preco: 157.20 },
        { data: "2024-03", preco: 158.60 },
        { data: "2024-04", preco: 160.00 },
        { data: "2024-05", preco: 159.50 },
        { data: "2024-06", preco: 161.20 }
      ],
      "Milho": [
        { data: "2023-07", preco: 65.20 },
        { data: "2023-08", preco: 66.10 },
        { data: "2023-09", preco: 66.80 },
        { data: "2023-10", preco: 67.50 },
        { data: "2023-11", preco: 68.00 },
        { data: "2023-12", preco: 68.30 },
        { data: "2024-01", preco: 69.10 },
        { data: "2024-02", preco: 69.80 },
        { data: "2024-03", preco: 70.30 },
        { data: "2024-04", preco: 70.90 },
        { data: "2024-05", preco: 71.20 },
        { data: "2024-06", preco: 71.80 }
      ]
    },
    tempo_medio_resposta: 1.8,
    taxa_aprovacao: 91,
    avaliacao: 4.9
  },
  {
    id: 3,
    nome: "Café do Cerrado",
    cnpj: "11.222.333/0001-44",
    categoria: ["Café"],
    historico_precos: {
      "Café Arábica": [
        { data: "2023-07", preco: 650.00 },
        { data: "2023-08", preco: 655.00 },
        { data: "2023-09", preco: 660.00 },
        { data: "2023-10", preco: 670.00 },
        { data: "2023-11", preco: 665.00 },
        { data: "2023-12", preco: 668.00 },
        { data: "2024-01", preco: 672.00 },
        { data: "2024-02", preco: 675.00 },
        { data: "2024-03", preco: 678.00 },
        { data: "2024-04", preco: 680.00 },
        { data: "2024-05", preco: 682.00 },
        { data: "2024-06", preco: 685.00 }
      ]
    },
    tempo_medio_resposta: 2.7,
    taxa_aprovacao: 80,
    avaliacao: 4.2
  },
  {
    id: 4,
    nome: "SucroMais Açúcar",
    cnpj: "22.333.444/0001-55",
    categoria: ["Açúcar"],
    historico_precos: {
      "Açúcar Cristal": [
        { data: "2023-07", preco: 124.00 },
        { data: "2023-08", preco: 125.50 },
        { data: "2023-09", preco: 126.00 },
        { data: "2023-10", preco: 128.00 },
        { data: "2023-11", preco: 129.00 },
        { data: "2023-12", preco: 130.00 },
        { data: "2024-01", preco: 131.00 },
        { data: "2024-02", preco: 132.00 },
        { data: "2024-03", preco: 133.00 },
        { data: "2024-04", preco: 134.00 },
        { data: "2024-05", preco: 135.00 },
        { data: "2024-06", preco: 136.00 }
      ]
    },
    tempo_medio_resposta: 3.2,
    taxa_aprovacao: 75,
    avaliacao: 3.9
  },
  {
    id: 5,
    nome: "CarneBov Agro",
    cnpj: "33.444.555/0001-66",
    categoria: ["Carne bovina"],
    historico_precos: {
      "Carne Bovina": [
        { data: "2023-07", preco: 19.50 },
        { data: "2023-08", preco: 19.80 },
        { data: "2023-09", preco: 20.10 },
        { data: "2023-10", preco: 20.30 },
        { data: "2023-11", preco: 20.20 },
        { data: "2023-12", preco: 20.40 },
        { data: "2024-01", preco: 20.60 },
        { data: "2024-02", preco: 20.80 },
        { data: "2024-03", preco: 21.00 },
        { data: "2024-04", preco: 21.20 },
        { data: "2024-05", preco: 21.40 },
        { data: "2024-06", preco: 21.60 }
      ]
    },
    tempo_medio_resposta: 2.5,
    taxa_aprovacao: 85,
    avaliacao: 4.5
  },
  {
    id: 6,
    nome: "Suinobras",
    cnpj: "44.555.666/0001-77",
    categoria: ["Carne suína"],
    historico_precos: {
      "Carne Suína": [
        { data: "2023-07", preco: 12.80 },
        { data: "2023-08", preco: 13.00 },
        { data: "2023-09", preco: 13.10 },
        { data: "2023-10", preco: 13.20 },
        { data: "2023-11", preco: 13.30 },
        { data: "2023-12", preco: 13.50 },
        { data: "2024-01", preco: 13.70 },
        { data: "2024-02", preco: 13.80 },
        { data: "2024-03", preco: 13.90 },
        { data: "2024-04", preco: 14.00 },
        { data: "2024-05", preco: 14.10 },
        { data: "2024-06", preco: 14.20 }
      ]
    },
    tempo_medio_resposta: 3.0,
    taxa_aprovacao: 78,
    avaliacao: 4.0
  },
  {
    id: 7,
    nome: "FrangoSul",
    cnpj: "55.666.777/0001-88",
    categoria: ["Frango"],
    historico_precos: {
      "Frango": [
        { data: "2023-07", preco: 7.60 },
        { data: "2023-08", preco: 7.70 },
        { data: "2023-09", preco: 7.80 },
        { data: "2023-10", preco: 7.90 },
        { data: "2023-11", preco: 8.00 },
        { data: "2023-12", preco: 8.10 },
        { data: "2024-01", preco: 8.20 },
        { data: "2024-02", preco: 8.30 },
        { data: "2024-03", preco: 8.40 },
        { data: "2024-04", preco: 8.50 },
        { data: "2024-05", preco: 8.60 },
        { data: "2024-06", preco: 8.70 }
      ]
    },
    tempo_medio_resposta: 2.3,
    taxa_aprovacao: 89,
    avaliacao: 4.8
  },
  {
    id: 8,
    nome: "Milho Forte",
    cnpj: "66.777.888/0001-99",
    categoria: ["Milho"],
    historico_precos: {
      "Milho": [
        { data: "2023-07", preco: 65.00 },
        { data: "2023-08", preco: 65.80 },
        { data: "2023-09", preco: 66.40 },
        { data: "2023-10", preco: 67.10 },
        { data: "2023-11", preco: 67.90 },
        { data: "2023-12", preco: 68.50 },
        { data: "2024-01", preco: 69.20 },
        { data: "2024-02", preco: 69.90 },
        { data: "2024-03", preco: 70.60 },
        { data: "2024-04", preco: 71.30 },
        { data: "2024-05", preco: 71.80 },
        { data: "2024-06", preco: 72.10 }
      ]
    },
    tempo_medio_resposta: 2.0,
    taxa_aprovacao: 92,
    avaliacao: 4.9
  },
  {
    id: 9,
    nome: "CerealMix",
    cnpj: "77.888.999/0001-10",
    categoria: ["Soja", "Milho"],
    historico_precos: {
      "Soja": [
        { data: "2023-07", preco: 146.00 },
        { data: "2023-08", preco: 148.00 },
        { data: "2023-09", preco: 150.00 },
        { data: "2023-10", preco: 152.00 },
        { data: "2023-11", preco: 153.00 },
        { data: "2023-12", preco: 154.00 },
        { data: "2024-01", preco: 155.00 },
        { data: "2024-02", preco: 156.00 },
        { data: "2024-03", preco: 157.00 },
        { data: "2024-04", preco: 158.00 },
        { data: "2024-05", preco: 159.00 },
        { data: "2024-06", preco: 160.00 }
      ]
    },
    tempo_medio_resposta: 2.6,
    taxa_aprovacao: 83,
    avaliacao: 4.3
  },
  {
    id: 10,
    nome: "CaféSul",
    cnpj: "88.999.000/0001-21",
    categoria: ["Café"],
    historico_precos: {
      "Café Arábica": [
        { data: "2023-07", preco: 652.00 },
        { data: "2023-08", preco: 654.00 },
        { data: "2023-09", preco: 656.00 },
        { data: "2023-10", preco: 658.00 },
        { data: "2023-11", preco: 660.00 },
        { data: "2023-12", preco: 662.00 },
        { data: "2024-01", preco: 664.00 },
        { data: "2024-02", preco: 666.00 },
        { data: "2024-03", preco: 668.00 },
        { data: "2024-04", preco: 670.00 },
        { data: "2024-05", preco: 672.00 },
        { data: "2024-06", preco: 674.00 }
      ]
    },
    tempo_medio_resposta: 2.9,
    taxa_aprovacao: 77,
    avaliacao: 4.1
  },
  {
    id: 11,
    nome: "AgroVaca",
    cnpj: "99.000.111/0001-32",
    categoria: ["Leite"],
    historico_precos: {
      "Leite Integral": [
        { data: "2023-07", preco: 2.90 },
        { data: "2023-08", preco: 2.97 },
        { data: "2023-09", preco: 3.00 },
        { data: "2023-10", preco: 3.05 },
        { data: "2023-11", preco: 3.12 },
        { data: "2023-12", preco: 3.15 },
        { data: "2024-01", preco: 3.18 },
        { data: "2024-02", preco: 3.22 },
        { data: "2024-03", preco: 3.25 },
        { data: "2024-04", preco: 3.29 },
        { data: "2024-05", preco: 3.33 },
        { data: "2024-06", preco: 3.36 }
      ]
    },
    tempo_medio_resposta: 2.4,
    taxa_aprovacao: 88,
    avaliacao: 4.6
  },
  {
    id: 12,
    nome: "Bovino Forte",
    cnpj: "10.111.222/0001-43",
    categoria: ["Carne bovina"],
    historico_precos: {
      "Carne Bovina": [
        { data: "2023-07", preco: 19.80 },
        { data: "2023-08", preco: 19.90 },
        { data: "2023-09", preco: 20.00 },
        { data: "2023-10", preco: 20.10 },
        { data: "2023-11", preco: 20.20 },
        { data: "2023-12", preco: 20.30 },
        { data: "2024-01", preco: 20.40 },
        { data: "2024-02", preco: 20.50 },
        { data: "2024-03", preco: 20.60 },
        { data: "2024-04", preco: 20.70 },
        { data: "2024-05", preco: 20.80 },
        { data: "2024-06", preco: 20.90 }
      ]
    },
    tempo_medio_resposta: 2.7,
    taxa_aprovacao: 82,
    avaliacao: 4.4
  },
  {
    id: 13,
    nome: "SuínoTop",
    cnpj: "11.222.333/0001-54",
    categoria: ["Carne suína"],
    historico_precos: {
      "Carne Suína": [
        { data: "2023-07", preco: 13.10 },
        { data: "2023-08", preco: 13.20 },
        { data: "2023-09", preco: 13.30 },
        { data: "2023-10", preco: 13.40 },
        { data: "2023-11", preco: 13.50 },
        { data: "2023-12", preco: 13.60 },
        { data: "2024-01", preco: 13.70 },
        { data: "2024-02", preco: 13.80 },
        { data: "2024-03", preco: 13.90 },
        { data: "2024-04", preco: 14.00 },
        { data: "2024-05", preco: 14.10 },
        { data: "2024-06", preco: 14.20 }
      ]
    },
    tempo_medio_resposta: 3.1,
    taxa_aprovacao: 79,
    avaliacao: 4.0
  },
  {
    id: 14,
    nome: "FrangoNorte",
    cnpj: "12.333.444/0001-65",
    categoria: ["Frango"],
    historico_precos: {
      "Frango": [
        { data: "2023-07", preco: 7.70 },
        { data: "2023-08", preco: 7.80 },
        { data: "2023-09", preco: 7.90 },
        { data: "2023-10", preco: 8.00 },
        { data: "2023-11", preco: 8.10 },
        { data: "2023-12", preco: 8.20 },
        { data: "2024-01", preco: 8.30 },
        { data: "2024-02", preco: 8.40 },
        { data: "2024-03", preco: 8.50 },
        { data: "2024-04", preco: 8.60 },
        { data: "2024-05", preco: 8.70 },
        { data: "2024-06", preco: 8.80 }
      ]
    },
    tempo_medio_resposta: 2.2,
    taxa_aprovacao: 90,
    avaliacao: 4.7
  },
  {
    id: 15,
    nome: "MilhoSul",
    cnpj: "13.444.555/0001-76",
    categoria: ["Milho"],
    historico_precos: {
      "Milho": [
        { data: "2023-07", preco: 65.50 },
        { data: "2023-08", preco: 66.30 },
        { data: "2023-09", preco: 67.00 },
        { data: "2023-10", preco: 67.70 },
        { data: "2023-11", preco: 68.40 },
        { data: "2023-12", preco: 69.10 },
        { data: "2024-01", preco: 69.80 },
        { data: "2024-02", preco: 70.50 },
        { data: "2024-03", preco: 71.20 },
        { data: "2024-04", preco: 71.90 },
        { data: "2024-05", preco: 72.60 },
        { data: "2024-06", preco: 73.30 }
      ]
    },
    tempo_medio_resposta: 2.1,
    taxa_aprovacao: 93,
    avaliacao: 4.9
  },
  {
    id: 16,
    nome: "CerealNorte",
    cnpj: "14.555.666/0001-87",
    categoria: ["Soja", "Milho"],
    historico_precos: {
      "Soja": [
        { data: "2023-07", preco: 147.00 },
        { data: "2023-08", preco: 148.50 },
        { data: "2023-09", preco: 150.00 },
        { data: "2023-10", preco: 151.50 },
        { data: "2023-11", preco: 153.00 },
        { data: "2023-12", preco: 154.50 },
        { data: "2024-01", preco: 156.00 },
        { data: "2024-02", preco: 157.50 },
        { data: "2024-03", preco: 159.00 },
        { data: "2024-04", preco: 160.50 },
        { data: "2024-05", preco: 162.00 },
        { data: "2024-06", preco: 163.50 }
      ]
    },
    tempo_medio_resposta: 2.8,
    taxa_aprovacao: 86,
    avaliacao: 4.4
  },
  {
    id: 17,
    nome: "CaféNorte",
    cnpj: "15.666.777/0001-98",
    categoria: ["Café"],
    historico_precos: {
      "Café Arábica": [
        { data: "2023-07", preco: 654.00 },
        { data: "2023-08", preco: 656.00 },
        { data: "2023-09", preco: 658.00 },
        { data: "2023-10", preco: 660.00 },
        { data: "2023-11", preco: 662.00 },
        { data: "2023-12", preco: 664.00 },
        { data: "2024-01", preco: 666.00 },
        { data: "2024-02", preco: 668.00 },
        { data: "2024-03", preco: 670.00 },
        { data: "2024-04", preco: 672.00 },
        { data: "2024-05", preco: 674.00 },
        { data: "2024-06", preco: 676.00 }
      ]
    },
    tempo_medio_resposta: 3.0,
    taxa_aprovacao: 76,
    avaliacao: 4.0
  },
  {
    id: 18,
    nome: "AgroSul",
    cnpj: "16.777.888/0001-09",
    categoria: ["Leite", "Milho"],
    historico_precos: {
      "Leite Integral": [
        { data: "2023-07", preco: 2.95 },
        { data: "2023-08", preco: 3.00 },
        { data: "2023-09", preco: 3.05 },
        { data: "2023-10", preco: 3.10 },
        { data: "2023-11", preco: 3.15 },
        { data: "2023-12", preco: 3.20 },
        { data: "2024-01", preco: 3.25 },
        { data: "2024-02", preco: 3.30 },
        { data: "2024-03", preco: 3.35 },
        { data: "2024-04", preco: 3.40 },
        { data: "2024-05", preco: 3.45 },
        { data: "2024-06", preco: 3.50 }
      ]
    },
    tempo_medio_resposta: 2.6,
    taxa_aprovacao: 84,
    avaliacao: 4.3
  },
  {
    id: 19,
    nome: "BovinoNorte",
    cnpj: "17.888.999/0001-20",
    categoria: ["Carne bovina"],
    historico_precos: {
      "Carne Bovina": [
        { data: "2023-07", preco: 19.90 },
        { data: "2023-08", preco: 20.00 },
        { data: "2023-09", preco: 20.10 },
        { data: "2023-10", preco: 20.20 },
        { data: "2023-11", preco: 20.30 },
        { data: "2023-12", preco: 20.40 },
        { data: "2024-01", preco: 20.50 },
        { data: "2024-02", preco: 20.60 },
        { data: "2024-03", preco: 20.70 },
        { data: "2024-04", preco: 20.80 },
        { data: "2024-05", preco: 20.90 },
        { data: "2024-06", preco: 21.00 }
      ]
    },
    tempo_medio_resposta: 2.8,
    taxa_aprovacao: 81,
    avaliacao: 4.2
  },
  {
    id: 20,
    nome: "SuínoSul",
    cnpj: "18.999.000/0001-31",
    categoria: ["Carne suína"],
    historico_precos: {
      "Carne Suína": [
        { data: "2023-07", preco: 13.20 },
        { data: "2023-08", preco: 13.30 },
        { data: "2023-09", preco: 13.40 },
        { data: "2023-10", preco: 13.50 },
        { data: "2023-11", preco: 13.60 },
        { data: "2023-12", preco: 13.70 },
        { data: "2024-01", preco: 13.80 },
        { data: "2024-02", preco: 13.90 },
        { data: "2024-03", preco: 14.00 },
        { data: "2024-04", preco: 14.10 },
        { data: "2024-05", preco: 14.20 },
        { data: "2024-06", preco: 14.30 }
      ]
    },
    tempo_medio_resposta: 3.2,
    taxa_aprovacao: 78,
    avaliacao: 3.9
  }
];

export default fornecedores;
