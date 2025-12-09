// Tabela paginada reutilizável para cotações
// Reutiliza classes CSS do template (card-table)
// Aceita dados via array de objetos e configuração de colunas
// Suporta ordenação, paginação e exibe total de registros

class TabelaPaginada {
  constructor({container, colunas, dados, registrosPorPagina = 10}) {
    this.container = container;
    this.colunas = colunas;
    this.dadosOriginais = dados;
    this.dados = [...dados];
    this.registrosPorPagina = registrosPorPagina;
    this.paginaAtual = 1;
    this.ordenacao = {coluna: null, asc: true};
    this.render();
  }

  ordenarPor(coluna) {
    if (this.ordenacao.coluna === coluna) {
      this.ordenacao.asc = !this.ordenacao.asc;
    } else {
      this.ordenacao.coluna = coluna;
      this.ordenacao.asc = true;
    }
    this.dados.sort((a, b) => {
      if (a[coluna] < b[coluna]) return this.ordenacao.asc ? -1 : 1;
      if (a[coluna] > b[coluna]) return this.ordenacao.asc ? 1 : -1;
      return 0;
    });
    this.paginaAtual = 1;
    this.render();
  }

  irParaPagina(pagina) {
    const totalPaginas = Math.ceil(this.dados.length / this.registrosPorPagina);
    if (pagina < 1 || pagina > totalPaginas) return;
    this.paginaAtual = pagina;
    this.render();
  }

  render() {
    const totalRegistros = this.dados.length;
    const totalPaginas = Math.ceil(totalRegistros / this.registrosPorPagina);
    const inicio = (this.paginaAtual - 1) * this.registrosPorPagina;
    const fim = inicio + this.registrosPorPagina;
    const paginaDados = this.dados.slice(inicio, fim);
    let html = `<div style="overflow-x:auto;">
      <table class="card-table" aria-label="Tabela Paginada">
        <thead>
          <tr>`;
    this.colunas.forEach(col => {
      html += `<th style="cursor:pointer;" onclick="window._tabelaPaginadaInstancia && window._tabelaPaginadaInstancia.ordenarPor('${col.chave}')">${col.titulo} ${(this.ordenacao.coluna === col.chave) ? (this.ordenacao.asc ? '▲' : '▼') : ''}</th>`;
    });
    html += `</tr>
        </thead>
        <tbody>`;
    paginaDados.forEach(registro => {
      html += '<tr>';
      this.colunas.forEach(col => {
        html += `<td>${registro[col.chave]}</td>`;
      });
      html += '</tr>';
    });
    html += `</tbody>
      </table>
    </div>`;
    html += `<div style="margin-top:12px; display:flex; align-items:center; gap:16px;">
      <button onclick="window._tabelaPaginadaInstancia && window._tabelaPaginadaInstancia.irParaPagina(${this.paginaAtual-1})" ${this.paginaAtual===1?'disabled':''} style="padding:8px 18px; border-radius:6px; border:none; background:#1a2340; color:#fff; font-weight:700; cursor:pointer;">Anterior</button>
      <span>Página <input type="number" min="1" max="${totalPaginas}" value="${this.paginaAtual}" style="width:48px; text-align:center;" onchange="window._tabelaPaginadaInstancia && window._tabelaPaginadaInstancia.irParaPagina(this.value)"> de ${totalPaginas}</span>
      <button onclick="window._tabelaPaginadaInstancia && window._tabelaPaginadaInstancia.irParaPagina(${this.paginaAtual+1})" ${this.paginaAtual===totalPaginas?'disabled':''} style="padding:8px 18px; border-radius:6px; border:none; background:#1a2340; color:#fff; font-weight:700; cursor:pointer;">Próxima</button>
      <span style="margin-left:auto; font-size:1.05rem; color:#555;">Total: ${totalRegistros} registros</span>
    </div>`;
    this.container.innerHTML = html;
  }
}

// Exemplo de uso:
// window._tabelaPaginadaInstancia = new TabelaPaginada({
//   container: document.getElementById('tabela-cotacoes'),
//   colunas: [
//     {chave:'id', titulo:'ID'},
//     {chave:'data', titulo:'Data'},
//     {chave:'produto', titulo:'Produto'},
//     {chave:'fornecedor', titulo:'Fornecedor'},
//     {chave:'valor_unitario', titulo:'Valor Unitário'},
//     {chave:'valor_total', titulo:'Valor Total'},
//     {chave:'status_workflow', titulo:'Status'},
//     {chave:'nivel_aprovacao', titulo:'Nível Atual'}
//   ],
//   dados: mockCotacoes,
//   registrosPorPagina: 10
// });