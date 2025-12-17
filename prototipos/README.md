# Protótipo Plurix - Cotação de Alimentos Perecíveis

## Descrição Geral
Este protótipo simula a solução web para cotação de alimentos perecíveis (carnes, frutas, verduras, legumes) para uma holding de supermercados. A plataforma contempla dashboards para compradores e fornecedores, integração com sistemas externos, fluxo de aprovação, comparação de propostas, painéis de KPIs e funcionalidades de auditoria e exportação.

## Mapa de Navegação (Fluxo entre Páginas)

- **index.html**: Página inicial/login. Direciona para o dashboard do comprador ou fornecedor.
- **dashboard-comprador.html**: Dashboard principal do comprador. Exibe cotações em andamento, cotações pendentes de disparo, acesso ao histórico, relatórios e KPIs.
- **cotacao-detalhe.html**: Detalhe de uma cotação em aberto. Mostra informações da cotação, status de propostas de fornecedores, botões de ação.
- **cotacao-disparo.html**: Página para selecionar fornecedores e disparar cotação. Tabela de fornecedores, KPIs, seleção e envio.
- **cotacao-pendente.html**: Modal/página para visualizar detalhes de uma cotação ainda não disparada, com opção de iniciar cotação.
- **proposta-detalhe.html**: Modal/página com detalhes da proposta do fornecedor, incluindo gráficos de KPIs e histórico de preços comparado ao mercado.
- **cotacao-pronta.html**: Página para aprovar propostas recebidas, selecionar quantidade e enviar pedido de compra.
- **dashboard-fornecedor.html**: Dashboard do fornecedor. Exibe cotações recebidas, status de propostas, histórico.
- **proposta-envio.html**: Página para o fornecedor enviar quantidade e preço para uma cotação recebida.
- **proposta-notificacao.html**: Página de notificação ao fornecedor sobre aceite ou rejeição da proposta.
- **historico.html**: Histórico de cotações e propostas.
- **relatorios.html**: Relatórios gerenciais, exportação Excel/PDF, comparativos de preços e performance.
- **upload-tabela.html**: Upload de tabelas de preços.

> Todas as páginas são conectadas por navegação direta ou via botões/links, simulando o fluxo real do usuário comprador ou fornecedor.

## Lista de Páginas HTML Criadas

- **index.html**: Login e seleção de perfil.
- **dashboard-comprador.html**: Dashboard do comprador.
- **cotacao-detalhe.html**: Detalhe de cotação em aberto.
- **cotacao-disparo.html**: Disparo de cotação para fornecedores.
- **cotacao-pendente.html**: Detalhe de cotação pendente de disparo.
- **proposta-detalhe.html**: Detalhe da proposta do fornecedor (inclui gráficos).
- **cotacao-pronta.html**: Aprovação de propostas e envio de pedidos.
- **dashboard-fornecedor.html**: Dashboard do fornecedor.
- **proposta-envio.html**: Envio de proposta pelo fornecedor.
- **proposta-notificacao.html**: Notificação de aceite/rejeição ao fornecedor.
- **historico.html**: Histórico de cotações/propostas.
- **relatorios.html**: Relatórios gerenciais e exportação.
- **upload-tabela.html**: Upload de tabelas de preços.

## Lista de Scripts JavaScript

- **scripts/main.js**: Lógica de navegação, abertura de modais, manipulação de dados mock.
- **scripts/graficos.js**: Renderização de gráficos de KPIs, histórico de preços, comparativos de mercado.
- **scripts/exportacao.js**: Exportação de relatórios e tabelas em Excel/PDF.
- **scripts/fornecedor.js**: Fluxo de envio de propostas e notificações para fornecedores.
- **scripts/comprador.js**: Fluxo de aprovação, disparo de cotação, seleção de fornecedores.

## Instruções para Visualização Local

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em seu navegador (não requer backend para navegação básica).
3. Navegue entre as páginas usando os menus e botões. Algumas funcionalidades de gráficos e exportação dependem de scripts mock e bibliotecas CDN.

## Observações sobre Dados Mock e Limitações

- Todos os dados exibidos (cotações, propostas, KPIs, históricos) são simulados (mock) para fins de prototipação.
- Integrações reais com APIs externas, ERPs e bancos de dados **não estão implementadas** neste protótipo.
- Exportação para Excel/PDF e gráficos utilizam bibliotecas CDN (ex: SheetJS, Chart.js) e dados estáticos.
- O fluxo de aprovação, auditoria e trilha de ações é simulado apenas na interface.
- O protótipo foca em usabilidade, navegação e visualização de funcionalidades, não em segurança ou autenticação real.

---

**Paleta de Cores:**
- Azul escuro: #1a2340
- Amarelo: #f9b233
- Verde: #4bb543
- Vermelho: #e74c3c

**Contato:**
- Para dúvidas ou sugestões, consulte a equipe de desenvolvimento Plurix.
