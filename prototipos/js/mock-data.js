// prototipos/js/mock-data.js
// Dados mock realistas para protótipo de cotações de alimentos perecíveis
window.mockCotacoes = [
  {
    id: 1,
    status: 'em_andamento',
    produto: 'Picanha',
    categoria: 'Carnes',
    quantidade: 120,
    unidade: 'kg',
    dataEntrega: '2024-06-20',
    fornecedores: [1,2,3],
    propostas: [
      {fornecedor: 1, preco: 79.90, quantidade: 120, status: 'enviada'},
      {fornecedor: 2, preco: 81.50, quantidade: 120, status: 'enviada'},
      {fornecedor: 3, preco: null, quantidade: null, status: 'nao_enviada'}
    ]
  },
  {
    id: 2,
    status: 'pendente',
    produto: 'Banana',
    categoria: 'Frutas',
    quantidade: 300,
    unidade: 'cx',
    dataEntrega: '2024-06-22',
    fornecedores: [2,3],
    propostas: []
  },
  {
    id: 3,
    status: 'pronta',
    produto: 'Alface',
    categoria: 'Verduras',
    quantidade: 200,
    unidade: 'maço',
    dataEntrega: '2024-06-18',
    fornecedores: [1,3],
    propostas: [
      {fornecedor: 1, preco: 2.10, quantidade: 200, status: 'enviada'},
      {fornecedor: 3, preco: 2.20, quantidade: 200, status: 'enviada'}
    ]
  }
];
window.mockFornecedores = [
  {
    id: 1,
    nome: 'Frigorífico Bom Corte',
    kpis: {score: 87, qualidade: 4.7, pontualidade: 4.6, conformidade: '98%', nc: 1}
  },
  {
    id: 2,
    nome: 'Hortifruti Silva',
    kpis: {score: 82, qualidade: 4.3, pontualidade: 4.1, conformidade: '95%', nc: 3}
  },
  {
    id: 3,
    nome: 'Ceasa Express',
    kpis: {score: 90, qualidade: 4.9, pontualidade: 4.8, conformidade: '99%', nc: 0}
  }
];
window.mockProdutosPereciveis = {
  carnes: [
    {nome: 'Picanha', sku: 'CAR-001'},
    {nome: 'Alcatra', sku: 'CAR-002'},
    {nome: 'Frango', sku: 'CAR-003'}
  ],
  frutas: [
    {nome: 'Banana', sku: 'FRU-001'},
    {nome: 'Maçã', sku: 'FRU-002'},
    {nome: 'Laranja', sku: 'FRU-003'}
  ],
  verduras: [
    {nome: 'Alface', sku: 'VER-001'},
    {nome: 'Tomate', sku: 'VER-002'}
  ],
  legumes: [
    {nome: 'Batata', sku: 'LEG-001'},
    {nome: 'Cenoura', sku: 'LEG-002'}
  ]
};
window.mockFornecedorKPIs = {
  scoreGeral: 87,
  qualidade: 4.7,
  pontualidade: 4.5,
  conformidade: '97%',
  naoConformidades: 2
};
window.mockNaoConformidades = [
  {
    data: '10/06/2024',
    produto: 'Picanha',
    tipo: 'Qualidade',
    descricao: 'Produto fora do padrão de marmoreio',
    status: 'Resolvida'
  },
  {
    data: '28/05/2024',
    produto: 'Banana',
    tipo: 'Entrega',
    descricao: 'Atraso de 1 dia na entrega',
    status: 'Em aberto'
  }
];
// Outras entidades para uso futuro
window.mockHistoricoCotacoes = [
  {
    id: 10,
    produto: 'Cenoura',
    categoria: 'Legumes',
    quantidade: 150,
    unidade: 'kg',
    dataEntrega: '2024-05-10',
    status: 'finalizada',
    fornecedorSelecionado: 2,
    precoFinal: 3.10
  },
  {
    id: 11,
    produto: 'Frango',
    categoria: 'Carnes',
    quantidade: 250,
    unidade: 'kg',
    dataEntrega: '2024-05-03',
    status: 'finalizada',
    fornecedorSelecionado: 1,
    precoFinal: 13.90
  }
];
