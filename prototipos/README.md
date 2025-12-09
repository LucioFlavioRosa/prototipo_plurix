# Protótipo: Portal Web de Gestão e Auditoria de Cotações

## Descrição Geral
Este protótipo apresenta o Portal Web de Gestão e Auditoria de Cotações, focado nos épicos E03 e E04:
- **E03 - Portal Web de Gestão e Auditoria de Cotações:** Dashboard gerencial para acompanhamento de cotações, análise comparativa de fornecedores, painéis de KPIs, exportação de relatórios e auditoria de decisões de compra.
- **E04 - Workflow de Aprovação de Cotações com Alçadas:** Interface para aprovação formal de cotações, respeitando hierarquias e trilha de auditoria, com relatórios de SLA e gargalos.

Todas as páginas são mockadas com dados realistas, simulando o fluxo de uso e navegação entre dashboards, relatórios e workflow de aprovação. O protótipo é responsivo e utiliza a identidade visual do template `dashboard-fornecedor.html`.

---

## Lista de Páginas e Funcionalidades

| Página                        | Funcionalidade Principal                                                                                   |
|-------------------------------|----------------------------------------------------------------------------------------------------------|
| `dashboard-cotacoes.html`     | Dashboard gerencial de cotações em andamento, KPIs, gráficos comparativos, acesso ao histórico e relatórios|
| `relatorio-comparativo.html`  | Relatório comparativo de preços por fornecedor, produto e período, incluindo exportação Excel/PDF         |
| `workflow-aprovacao.html`     | Painel de workflow de aprovação, matriz de alçadas, histórico de aprovações, aprovação/rejeição de cotações|
| `historico-cotacoes.html`     | Histórico detalhado de todas as cotações, trilha de auditoria, filtros avançados                          |
| `index.html`                  | Página inicial de login                                                                                    |

---

## Instruções de Navegação
- O fluxo inicia em `index.html` (login).
- Após login, o usuário é direcionado para `dashboard-cotacoes.html`.
- O menu lateral permite navegar entre Dashboard, Relatórios Comparativos, Workflow de Aprovação e Histórico.
- Botões e links nas tabelas e cards abrem modais de detalhes ou redirecionam para páginas de relatório/aprovação.
- Exportação de relatórios pode ser feita via botões "Download Excel" ou "Exportar PDF".

---

## Dados Mockados
- **Cotações:**
  - Estrutura: `{ id, fornecedor, produto, data, preço, status, índice_mercado, comprador, tempo_resposta }`
  - Fonte: Mock manual, simula dados reais de fornecedores (Ambev, Nestlé, BRF, etc.), produtos variados, datas recentes.
- **KPIs:**
  - Tempo médio de resposta, spread de preços, volume de cotações por período, taxa de aproveitamento de melhores cotações.
- **Workflow:**
  - Matriz de alçadas por valor, categoria e coligada, histórico de aprovações com nomes, datas e justificativas.
- **Índices de Mercado:**
  - Mock de valores Esalq CEPEA, Milkpoint, Safras para comparação automática.

---

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica das páginas e modais.
- **CSS3**: Estilização responsiva, identidade visual do template original.
- **JavaScript (Vanilla)**: Interatividade dos modais, navegação, validação de formulários.
- **Chart.js**: Gráficos de KPIs e comparativos (mockados).
- **SheetJS**: Exportação de tabelas para Excel (`.xlsx`).

---

## Observações sobre Limitações
- Todos os dados são mockados e estáticos, sem integração com backend real.
- Funcionalidades de exportação e gráficos usam dados simulados.
- Não há autenticação real, apenas navegação simulada.
- Aprovação/rejeição de cotações não altera dados persistentes.
- Modais e fluxos são ilustrativos para validação visual e funcional.

---

## Screenshots das Principais Telas

> **Nota:** As imagens abaixo são exemplos mockados e podem ser substituídas por capturas reais após renderização do protótipo.

### Dashboard Gerencial
![Dashboard Gerencial](screenshots/dashboard-cotacoes.png)

### Relatório Comparativo de Preços
![Relatório Comparativo](screenshots/relatorio-comparativo.png)

### Workflow de Aprovação
![Workflow de Aprovação](screenshots/workflow-aprovacao.png)

### Histórico de Cotações
![Histórico de Cotações](screenshots/historico-cotacoes.png)

---

## Contato
Para dúvidas ou sugestões sobre o protótipo, entre em contato com o Product Owner ou equipe de frontend.
