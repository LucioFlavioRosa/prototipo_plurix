# Protótipo - Integração Indicatore & ERP Totvs Com5

## Estrutura

- `/css/style.min.css` — Estilos minificados para todos os protótipos
- `/js/` — Scripts de interação e integração (mock)
- `/assets/` — Imagens, ícones e logos
- `/components/` — Componentes HTML reutilizáveis
- `dashboard-fornecedor.html` — Dashboard principal do fornecedor
- `upload-tabela.html` — Tela para upload de nova tabela de preços
- `historico.html` — Histórico de submissões e integrações
- `integracao-indicatore.html` — Tela de monitoramento da integração com Indicatore
- `integracao-totvs.html` — Tela de monitoramento/envio de pedidos para Totvs Com5

## Fluxo de Uso

1. O fornecedor acessa o `dashboard-fornecedor.html` para visualizar tabelas recentes e status de integração.
2. Para enviar nova tabela, utiliza o botão '+ Nova Tabela de Preços', que direciona para `upload-tabela.html`.
3. O histórico de submissões pode ser acessado via `historico.html`.
4. O status da integração com Indicatore pode ser monitorado em `integracao-indicatore.html`.
5. O envio automático de pedidos aprovados para o ERP Totvs Com5 é monitorado em `integracao-totvs.html`.

## Integração com Sistemas Legados

- **Indicatore:** APIs de previsão de demanda e sugestões de compra são simuladas via mock.
- **Totvs Com5:** O envio de pedidos aprovados é representado por botões e status em tela.
- **Sincronização de fornecedores:** Simulada via componente de tabela e botões de sincronização.

## Documentação Técnica

- Todos os arquivos HTML referenciam `/css/style.min.css` para garantir identidade visual.
- Scripts de integração estão em `/js/` e podem ser expandidos para backend real.
- Para testes/homologação, utilize os links de navegação entre páginas para simular o fluxo completo.

## Observações

- Este protótipo é apenas visual e não realiza integrações reais.
- Para dúvidas ou sugestões, consulte o time de integração.
