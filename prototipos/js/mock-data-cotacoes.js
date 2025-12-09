// Dados mockados realistas para cotações (foco nos épicos E03/E04)
// Cada cotação possui: ID, data, produto, quantidade, unidade, fornecedor, valor unitário, valor total, status workflow, nível aprovação, aprovadores, justificativas, histórico, índices de mercado

const mockCotacoes = [
  {
    id: 'CT20240601',
    data: '2024-06-10',
    produto: 'Leite UHT Integral',
    quantidade: 1200,
    unidade: 'cx',
    fornecedor: 'Nestlé',
    valor_unitario: 3.19,
    valor_total: 3828.00,
    status_workflow: 'Em andamento',
    nivel_aprovacao: 'Dir. Comercial Bandeira',
    aprovadores: [
      {nivel: 'Gerente Categoria Bandeira', nome: 'Carlos Silva', aprovado: true, data: '2024-06-10'},
      {nivel: 'Dir. Comercial Bandeira', nome: 'Ana Souza', aprovado: false, data: null}
    ],
    justificativas: [],
    historico: [
      {acao: 'Submissão', usuario: 'Nestlé', data: '2024-06-10'},
      {acao: 'Aprovação', usuario: 'Carlos Silva', data: '2024-06-10'}
    ],
    indices_mercado: {esalq: 3.25, milkpoint: 3.18, safra: 3.22}
  },
  {
    id: 'CT20240602',
    data: '2024-06-09',
    produto: 'Cerveja Skol Lata 350ml',
    quantidade: 2500,
    unidade: 'un',
    fornecedor: 'Ambev',
    valor_unitario: 2.89,
    valor_total: 7225.00,
    status_workflow: 'Aprovada',
    nivel_aprovacao: 'VP',
    aprovadores: [
      {nivel: 'Gerente Categoria Bandeira', nome: 'Marcio Lima', aprovado: true, data: '2024-06-09'},
      {nivel: 'Dir. Comercial Bandeira', nome: 'Ana Souza', aprovado: true, data: '2024-06-09'},
      {nivel: 'Dir. Comercial Holding', nome: 'Roberto Alves', aprovado: true, data: '2024-06-09'},
      {nivel: 'VP', nome: 'Fernanda Torres', aprovado: true, data: '2024-06-09'}
    ],
    justificativas: [],
    historico: [
      {acao: 'Submissão', usuario: 'Ambev', data: '2024-06-09'},
      {acao: 'Aprovação', usuario: 'Marcio Lima', data: '2024-06-09'},
      {acao: 'Aprovação', usuario: 'Ana Souza', data: '2024-06-09'},
      {acao: 'Aprovação', usuario: 'Roberto Alves', data: '2024-06-09'},
      {acao: 'Aprovação', usuario: 'Fernanda Torres', data: '2024-06-09'}
    ],
    indices_mercado: {esalq: 2.95, milkpoint: null, safra: null}
  },
  {
    id: 'CT20240603',
    data: '2024-06-08',
    produto: 'Frango Congelado 1kg',
    quantidade: 500,
    unidade: 'kg',
    fornecedor: 'BRF',
    valor_unitario: 7.49,
    valor_total: 3745.00,
    status_workflow: 'Reprovada',
    nivel_aprovacao: 'Dir. Comercial Holding',
    aprovadores: [
      {nivel: 'Gerente Categoria Bandeira', nome: 'Carlos Silva', aprovado: true, data: '2024-06-08'},
      {nivel: 'Dir. Comercial Bandeira', nome: 'Ana Souza', aprovado: true, data: '2024-06-08'},
      {nivel: 'Dir. Comercial Holding', nome: 'Roberto Alves', aprovado: false, data: '2024-06-08'}
    ],
    justificativas: [
      {nivel: 'Dir. Comercial Holding', motivo: 'Preço acima do índice de mercado', data: '2024-06-08'}
    ],
    historico: [
      {acao: 'Submissão', usuario: 'BRF', data: '2024-06-08'},
      {acao: 'Aprovação', usuario: 'Carlos Silva', data: '2024-06-08'},
      {acao: 'Aprovação', usuario: 'Ana Souza', data: '2024-06-08'},
      {acao: 'Reprovação', usuario: 'Roberto Alves', data: '2024-06-08'}
    ],
    indices_mercado: {esalq: 7.10, milkpoint: null, safra: 7.25}
  },
  {
    id: 'CT20240604',
    data: '2024-06-07',
    produto: 'Carne Bovina Picanha 1kg',
    quantidade: 200,
    unidade: 'kg',
    fornecedor: 'JBS',
    valor_unitario: 49.90,
    valor_total: 9980.00,
    status_workflow: 'Em andamento',
    nivel_aprovacao: 'Gerente Categoria Bandeira',
    aprovadores: [
      {nivel: 'Gerente Categoria Bandeira', nome: 'Carlos Silva', aprovado: false, data: null}
    ],
    justificativas: [],
    historico: [
      {acao: 'Submissão', usuario: 'JBS', data: '2024-06-07'}
    ],
    indices_mercado: {esalq: 48.50, milkpoint: null, safra: 50.10}
  },
  {
    id: 'CT20240605',
    data: '2024-06-06',
    produto: 'Iogurte Natural 170g',
    quantidade: 3000,
    unidade: 'un',
    fornecedor: 'Danone',
    valor_unitario: 1.99,
    valor_total: 5970.00,
    status_workflow: 'Finalizada',
    nivel_aprovacao: 'VP',
    aprovadores: [
      {nivel: 'Gerente Categoria Bandeira', nome: 'Marcio Lima', aprovado: true, data: '2024-06-06'},
      {nivel: 'Dir. Comercial Bandeira', nome: 'Ana Souza', aprovado: true, data: '2024-06-06'},
      {nivel: 'Dir. Comercial Holding', nome: 'Roberto Alves', aprovado: true, data: '2024-06-06'},
      {nivel: 'VP', nome: 'Fernanda Torres', aprovado: true, data: '2024-06-06'}
    ],
    justificativas: [],
    historico: [
      {acao: 'Submissão', usuario: 'Danone', data: '2024-06-06'},
      {acao: 'Aprovação', usuario: 'Marcio Lima', data: '2024-06-06'},
      {acao: 'Aprovação', usuario: 'Ana Souza', data: '2024-06-06'},
      {acao: 'Aprovação', usuario: 'Roberto Alves', data: '2024-06-06'},
      {acao: 'Aprovação', usuario: 'Fernanda Torres', data: '2024-06-06'}
    ],
    indices_mercado: {esalq: 2.05, milkpoint: 1.98, safra: null}
  },
  // ... (45 registros adicionais mockados para cobrir variedade de datas, produtos, fornecedores, status, níveis, índices)
];

// Gera mais registros mockados para simular volume
for (let i = 6; i <= 50; i++) {
  mockCotacoes.push({
    id: `CT202406${i.toString().padStart(2,'0')}`,
    data: `2024-06-${(11 + Math.floor(i/2)).toString().padStart(2,'0')}`,
    produto: [
      'Leite UHT Integral', 'Cerveja Skol Lata 350ml', 'Frango Congelado 1kg', 'Carne Bovina Picanha 1kg', 'Iogurte Natural 170g', 'Refrigerante Guaraná 2L', 'Pepsi Lata 350ml', 'Queijo Mussarela 1kg', 'Hambúrguer Bovino 90g', 'Suco de Laranja 1L'
    ][i%10],
    quantidade: Math.floor(Math.random()*3000+100),
    unidade: ['un','kg','cx'][i%3],
    fornecedor: ['Ambev','Cargill','JBS','BRF','Nestlé','Danone'][i%6],
    valor_unitario: parseFloat((Math.random()*50+1).toFixed(2)),
    valor_total: function() {return this.quantidade * this.valor_unitario}.call(this),
    status_workflow: ['Em andamento','Aprovada','Reprovada','Pendente','Finalizada'][i%5],
    nivel_aprovacao: ['Gerente Categoria Bandeira','Dir. Comercial Bandeira','Dir. Comercial Holding','VP'][i%4],
    aprovadores: [
      {nivel: 'Gerente Categoria Bandeira', nome: 'Carlos Silva', aprovado: true, data: `2024-06-${(11 + Math.floor(i/2)).toString().padStart(2,'0')}`},
      {nivel: 'Dir. Comercial Bandeira', nome: 'Ana Souza', aprovado: i%2===0, data: i%2===0?`2024-06-${(11 + Math.floor(i/2)).toString().padStart(2,'0')}`:null},
      {nivel: 'Dir. Comercial Holding', nome: 'Roberto Alves', aprovado: i%3===0, data: i%3===0?`2024-06-${(11 + Math.floor(i/2)).toString().padStart(2,'0')}`:null},
      {nivel: 'VP', nome: 'Fernanda Torres', aprovado: i%4===0, data: i%4===0?`2024-06-${(11 + Math.floor(i/2)).toString().padStart(2,'0')}`:null}
    ],
    justificativas: i%3===0 ? [{nivel:'Dir. Comercial Holding', motivo:'Preço acima do índice de mercado', data:`2024-06-${(11 + Math.floor(i/2)).toString().padStart(2,'0')}`}] : [],
    historico: [
      {acao: 'Submissão', usuario: ['Ambev','Cargill','JBS','BRF','Nestlé','Danone'][i%6], data: `2024-06-${(11 + Math.floor(i/2)).toString().padStart(2,'0')}`},
      {acao: 'Aprovação', usuario: 'Carlos Silva', data: `2024-06-${(11 + Math.floor(i/2)).toString().padStart(2,'0')}`}
    ],
    indices_mercado: {
      esalq: parseFloat((Math.random()*50+1).toFixed(2)),
      milkpoint: i%2===0?parseFloat((Math.random()*50+1).toFixed(2)):null,
      safra: i%3===0?parseFloat((Math.random()*50+1).toFixed(2)):null
    }
  });
}

// Exporta para uso global
window.mockCotacoes = mockCotacoes;