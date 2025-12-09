// workflow-engine-mock.js
// Mock da engine de workflow de aprovação de cotações

const matrizAlcadas = [
  { limite: 10000, niveis: [
    { nome: 'Gerente de Compras', sla: 2 }
  ] },
  { limite: 50000, niveis: [
    { nome: 'Gerente de Compras', sla: 2 },
    { nome: 'Diretor Comercial', sla: 3 }
  ] },
  { limite: 200000, niveis: [
    { nome: 'Gerente de Compras', sla: 2 },
    { nome: 'Diretor Comercial', sla: 3 },
    { nome: 'Diretor Financeiro', sla: 4 }
  ] },
  { limite: Infinity, niveis: [
    { nome: 'Gerente de Compras', sla: 2 },
    { nome: 'Diretor Comercial', sla: 3 },
    { nome: 'Diretor Financeiro', sla: 4 },
    { nome: 'VP', sla: 5 }
  ] }
];

function getWorkflowInfo(cotacao) {
  // cotacao: { valor, categoria, coligada, nivelAtual }
  let regra = matrizAlcadas.find(r => cotacao.valor <= r.limite);
  let niveis = regra.niveis;
  let nivelAtual = cotacao.nivelAtual || 0;
  let proximoNivel = niveis[nivelAtual] || null;
  let requerAprovacaoAdicional = nivelAtual < (niveis.length - 1);
  return {
    proximoNivel: proximoNivel ? proximoNivel.nome : null,
    aprovadorResponsavel: proximoNivel ? proximoNivel.nome : null,
    slaDias: proximoNivel ? proximoNivel.sla : null,
    requerAprovacaoAdicional: requerAprovacaoAdicional,
    totalNiveis: niveis.length,
    matriz: niveis.map(n => ({ nome: n.nome, sla: n.sla }))
  };
}

// Exemplo de uso mock
/*
const cotacaoMock = {
  valor: 120000,
  categoria: 'Cervejas',
  coligada: 'Holding',
  nivelAtual: 2
};
console.log(getWorkflowInfo(cotacaoMock));
*/

// Export para uso em HTML
window.workflowEngineMock = {
  getWorkflowInfo
};
