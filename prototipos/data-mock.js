// Dados mockados para o protótipo Plurix
// Lista de fornecedores (50 registros)
const fornecedores = Array.from({length: 50}, (_, i) => ({
  id: i + 1,
  nome: `Fornecedor ${i + 1}`,
  cnpj: `12.345.678/000${(i % 10) + 1}-0${(i % 9) + 1}`,
  email: `contato${i + 1}@fornecedor.com`,
  uf: ['SP', 'RJ', 'MG', 'RS', 'BA'][i % 5],
  status: ['Ativo', 'Inativo'][i % 2],
  bandeira: ['SuperMais', 'Maxi', 'BomPreço', 'Top', 'Ultra'][i % 5]
}));

// Tabelas de preços (100 registros)
const tabelasPrecos = Array.from({length: 100}, (_, i) => ({
  id: i + 1,
  fornecedorId: (i % 50) + 1,
  dataEnvio: `2024-06-${(i % 28) + 1}`,
  status: ['Pendente', 'Aprovada', 'Reprovada', 'Em Análise'][i % 4],
  arquivo: `tabela_${i + 1}.xlsx`,
  coligadas: ['SP', 'RJ', 'MG', 'RS', 'BA'].filter((_, idx) => (i + idx) % 2 === 0),
  totalSKUs: 100 + (i % 50),
  variacaoPercentual: (Math.random() * 10 - 5).toFixed(2),
  impactoFinanceiro: (Math.random() * 50000).toFixed(2)
}));

// Usuários (30 registros)
const usuarios = Array.from({length: 30}, (_, i) => ({
  id: i + 1,
  nome: `Usuário ${i + 1}`,
  email: `usuario${i + 1}@plurix.com`,
  perfil: ['Fornecedor', 'Comprador', 'Gerente', 'Diretor', 'VP', 'Administrador'][i % 6],
  status: ['Ativo', 'Inativo'][i % 2],
  bandeira: ['SuperMais', 'Maxi', 'BomPreço', 'Top', 'Ultra'][i % 5]
}));

// Logs de auditoria (200 registros)
const logsAuditoria = Array.from({length: 200}, (_, i) => ({
  id: i + 1,
  usuario: `Usuário ${((i % 30) + 1)}`,
  acao: ['Upload', 'Aprovação', 'Reprovação', 'Login', 'Alteração', 'Exportação'][i % 6],
  entidade: ['Tabela de Preços', 'Usuário', 'Fornecedor', 'Log'][i % 4],
  data: `2024-06-${(i % 28) + 1} ${String(8 + (i % 10)).padStart(2, '0')}:${String(i % 60).padStart(2, '0')}`,
  detalhe: `Detalhe da ação ${i + 1}`
}));

// Métricas de dashboard
const dashboardMetrics = {
  totalFornecedores: fornecedores.length,
  tabelasPendentes: tabelasPrecos.filter(t => t.status === 'Pendente').length,
  tabelasAprovadas: tabelasPrecos.filter(t => t.status === 'Aprovada').length,
  tabelasReprovadas: tabelasPrecos.filter(t => t.status === 'Reprovada').length,
  impactoFinanceiroTotal: tabelasPrecos.reduce((acc, t) => acc + parseFloat(t.impactoFinanceiro), 0).toFixed(2),
  variacaoMedia: (
    tabelasPrecos.reduce((acc, t) => acc + parseFloat(t.variacaoPercentual), 0) / tabelasPrecos.length
  ).toFixed(2)
};

// Exporta para uso inline
window.mockData = {
  fornecedores,
  tabelasPrecos,
  usuarios,
  logsAuditoria,
  dashboardMetrics
};
