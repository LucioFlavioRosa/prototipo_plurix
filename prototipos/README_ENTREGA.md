# Apresentação da Solução de Cotação de Alimentos Perecíveis - Plurix

## Objetivo
Solução web completa para gestão de cotações de alimentos perecíveis (carnes, frutas, verduras, legumes) para holdings de supermercados, integrando APIs de previsão de demanda, conectores ERP, workflow de aprovação, dashboards e relatórios gerenciais.

## Fluxo Principal do Comprador
1. **Dashboard:** Visualização de cotações em andamento e cotações a disparar.
2. **Cotação a disparar:** Modal com detalhes, opção de iniciar cotação.
3. **Seleção de Fornecedor:** Tabela de fornecedores, KPIs, seleção e disparo de cotação.
4. **Cotação em aberto:** Visualização de propostas recebidas/não recebidas.
5. **Proposta recebida:** Modal com detalhes, gráficos de KPIs e comparação de preços de mercado.
6. **Cotação pronta:** Seleção de propostas, envio de pedidos.

## Fluxo Principal do Fornecedor
1. **Responder cotação:** Formulário para quantidade e preço.
2. **Notificação de aceite/recusa:** Visualização do status da proposta enviada.

## Funcionalidades Avançadas
- Integração com Indicatore (previsão de demanda)
- Conector ERP Totvs Com5
- Mapeamento de dados entre sistemas
- Sincronização de fornecedores
- Relatórios comparativos, exportação Excel/PDF
- Painéis de KPIs, ranking de fornecedores, histórico de não-conformidades
- Engine de workflow de aprovação, matriz de alçadas
- Trilha de auditoria, relatórios de SLA
- Importação em lote, validação de dados

## Acessibilidade
- Navegação por teclado, contraste validado, aria-labels e roles aplicados, labels em todos os inputs.

## Como Visualizar
1. Extraia o ZIP em uma pasta local.
2. Abra `prototipos/index.html` no navegador.
3. Navegue pelos fluxos principais usando os menus e botões.

## Documentação Complementar
- [Checklist de Funcionalidades](CHECKLIST_FUNCIONALIDADES.md)
- Slides de apresentação: `apresentacao_plurix.pdf`
