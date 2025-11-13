# Protótipo Plataforma Plurix – Gestão de Tabelas de Preços

## Visão Geral
Este protótipo representa a solução de gerenciamento centralizado de tabelas de preços para fornecedores, compradores e gestores Plurix, cobrindo todos os épicos e fluxos principais descritos na documentação de requisitos. O objetivo é validar a experiência de navegação, layout, componentes e regras de negócio antes do desenvolvimento completo.

## Mapeamento de Épicos para Páginas
- **E01 – Portal de Upload/Submissão:** `fornecedor-upload.html`, `fornecedor-ajuste-manual.html`
- **E02 – Motor de Cálculos:** Simulado via dados mockados e visualizações em dashboards
- **E03 – Workflow de Aprovações:** `painel-aprovacoes.html` (não incluído nesta etapa)
- **E04 – Painel de Análise Comercial:** `dashboard.html` (não incluído nesta etapa)
- **E05 – Gestão de Identidade/Acessos:** `admin-usuarios.html`, `login.html`
- **E06 – Integração ERPs:** Simulado via status em tabelas de preços
- **E07 – Logs/Auditoria:** `painel-auditoria.html` (não incluído nesta etapa)
- **E08 – Gestão de Fornecedores:** `admin-fornecedores.html`
- **E09 – Infraestrutura/DevOps:** Fora do escopo do protótipo
- **E10 – Prototipação/UX:** Todos os arquivos HTML seguem identidade visual e componentes do template

## Guia de Navegação por Perfil
- **Fornecedor:** Upload de tabela, ajuste manual de produtos
- **Comprador/Gerente/Diretor/VP:** Visualização de dashboards, aprovação de tabelas (não incluído nesta etapa)
- **Administrador:** Gestão de usuários e fornecedores

## Componentes Reutilizáveis
- Formulários validados com mensagens contextuais
- Botões primários estilizados
- Tabelas de dados (em páginas de listagem)
- Layout responsivo, cabeçalho e rodapé replicados do template

## Dados Mockados
Os dados de exemplo estão em `data-mock.js` e são carregados inline nas páginas que exibem listas, dashboards ou tabelas. Incluem fornecedores, tabelas de preços, usuários, logs de auditoria e métricas.

## Instruções para Visualização Local
1. Faça o download de todos os arquivos da pasta `prototipos/`.
2. Abra `index.html` (ou qualquer página HTML desejada) diretamente no navegador.
3. Os dados são mockados e não há backend; todas as interações são simuladas via JavaScript inline.

## Limitações do Protótipo
- Não há persistência real de dados (apenas mock)
- Não há autenticação real nem integração com sistemas externos
- Algumas páginas/fluxos podem estar ausentes nesta etapa
- Não há backend, APIs ou integração real com ERPs

## Próximos Passos para Desenvolvimento
- Implementar backend e APIs reais
- Integração com ERPs Consinco/Flex
- Implementação do workflow de aprovação multinível
- Adição de painéis de auditoria, logs e dashboards avançados
- Testes de usabilidade e ajustes finais de UX/UI
