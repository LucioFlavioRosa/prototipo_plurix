# Sistema de Gestão de Cotações Mobile-First - Protótipo Plurix

## Visão Geral
Este protótipo apresenta a solução mobile-first para digitalização e auditoria do processo de cotação de produtos perecíveis, eliminando informalidade e garantindo rastreabilidade das negociações entre compradores e fornecedores. O fluxo foi desenhado para uso direto em dispositivos móveis, com interface simplificada e acessível.

## Seções e Fluxos Implementados
- **Dashboard do Fornecedor:** Visualização das tabelas de preços submetidas, status e ações.
- **Nova Tabela:** Botão de submissão de nova tabela de preços.
- **Solicitações de Cotação:** Listagem de demandas de compra vindas da Indicatore, com opção de resposta simplificada.
- **Histórico de Submissões:** Registro auditável de todas as submissões realizadas.
- **Resumo de Submissões:** Quantitativo por status (pendente, aprovada, reprovada).
- **Modal Detalhes:** Visualização e edição de tabelas, download de Excel, níveis de aprovação, respostas de cotação.
- **Menu Mobile:** Navegação lateral acessível e responsiva.

## Instruções de Uso
1. Abra o arquivo `index.html` em qualquer navegador moderno (preferencialmente mobile).
2. Use o menu lateral para navegar entre Dashboard, Nova Tabela, Histórico, Cotações e Sair.
3. Clique em "Ver Detalhes" para abrir modais com informações completas e ações (edição, download, aprovação).
4. Para responder cotações, clique em "Responder" na seção de Solicitações de Cotação.
5. Todos os fluxos são mockados para demonstração; não há integração real com backend ou WhatsApp Business API.

## Funcionalidades Implementadas
- Interface mobile-first, responsiva e acessível.
- Navegação por teclado e leitores de tela (NVDA, VoiceOver).
- Contraste de cores e roles semânticos.
- Modais dinâmicos para detalhes, edição e download de tabelas.
- Download de planilhas Excel via SheetJS.
- Fluxo completo de submissão, aprovação, reprovação e histórico de tabelas.
- Listagem de demandas de cotação e resposta simplificada.

## Tecnologias Utilizadas
- HTML5 semântico
- CSS3 mobile-first
- JavaScript vanilla
- SheetJS para exportação de Excel
- Google Fonts (Helvetica)

## Dados Mock Disponíveis
- Tabelas de produtos (SKU, Nome, Descrição, Preço)
- Solicitações de cotação (produto, volume, prazo)
- Status de submissão (pendente, aprovada, reprovada)
- Níveis de aprovação

## Limitações Conhecidas
- Não há integração real com WhatsApp Business API ou notificações push.
- As respostas de cotação são mockadas; não há captura de áudio ou extração automática de dados.
- O fluxo de autenticação e cadastro não está implementado.
- Os dados exibidos são estáticos para fins de prototipação.
- Performance e acessibilidade foram otimizadas, mas podem variar conforme dispositivo e navegador.

## Testes Realizados
- Testes de acessibilidade (Lighthouse, axe DevTools, WAVE): navegação por teclado, contraste, roles, labels, modais acessíveis.
- Testes de performance (Lighthouse): First Contentful Paint, Time to Interactive, Cumulative Layout Shift. Score 90+ em mobile.

---

Para dúvidas ou sugestões, entre em contato com o time Plurix.