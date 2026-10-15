# JS INOX — relatório de implementação e validação

**Versão:** 1.0.0 — implementação local demonstrativa  
**Tecnologia planejada:** Astro, TypeScript, CSS e saída estática  
**Publicação:** não realizada  
**Integrações externas:** não configuradas

## 1. Entregue nesta versão

- Landing page com cabeçalho, hero, apresentação institucional, frentes de solução, contextos de aplicação, processo de avaliação, oferta de entrada, área editorial de projetos, FAQ, formulário demonstrativo, CTA final e rodapé.
- Componentes reutilizáveis e dados separados dos componentes para navegação, soluções, segmentos, processo e FAQ.
- Design tokens CSS, layout responsivo e estados de foco.
- Menu mobile com estado ARIA e fechamento por Escape/clique em link.
- FAQ usando elementos nativos `details` e `summary`.
- Formulário de demonstração com validação no navegador, mensagens associadas aos campos e feedback anunciado por `aria-live`.
- Prévia `preview.html` para inspeção sem a instalação de dependências.
- Logotipo horizontal e símbolo oficial fornecidos, sem reconstrução do desenho.
- Cópias dos documentos estratégicos preliminares em `docs/`.

## 2. Limites funcionais

- O formulário não contém destino de envio nem chamada de rede; o botão de validação tem `type="button"` e o evento submit é bloqueado preventivamente.
- Não foi adicionado armazenamento em cookies, localStorage, banco ou arquivo.
- Não há integração de contato real.
- A área de comprovações mostra apenas uma composição gráfica abstrata e um aviso de conteúdo pendente; não simula obra executada.
- Andaimes, escoras e plataformas estão citados como pendência e não aparecem como oferta principal.

## 3. Estado dos testes

| Verificação | Estado | Observações |
|---|---|---|
| Conferência dos arquivos e imagens fornecidos | Feita | Os quatro PNGs foram inspecionados quanto à presença e dimensões; os originais foram copiados sem edição. |
| Verificação estática da prévia HTML | Aprovada | `node tests/check-static.mjs`: sem IDs duplicados, âncoras quebradas, imagens ausentes, desequilíbrio de chaves CSS ou referências de integrações bloqueadas. |
| Sintaxe do JavaScript da prévia | Aprovada | O script incorporado passou em `node --check`. |
| Estrutura e conteúdo da prévia HTML | Preparada | `preview.html` serve como prévia offline, usando CSS e imagens locais. |
| Build de produção Astro | Pendente | Foi tentado `npm run build`, mas o comando terminou com `astro: not found`. A consulta ao registro npm também expirou; executar `npm install` e `npm run build` em um ambiente com acesso ao registro npm. |
| Checagem Astro/TypeScript | Pendente | Depende da instalação das dependências do projeto. |
| Teste visual em navegadores, desktop e mobile | Pendente de captura | As dimensões de referência previstas são 390 px, 768 px, 1024 px, 1440 px e 1920 px. |
| Validação automatizada WCAG 2.2 AA | Pendente | Não foi executada ferramenta automatizada de auditoria de acessibilidade. |
| Lighthouse/performance | Pendente | Não foi medido; qualquer pontuação permanece desconhecida. |
| Conferência final de claims comerciais | Pendente de aprovação da empresa | O conteúdo evita afirmações sobre clientes, projetos realizados, certificações, cobertura, prazos ou capacidades não comprovadas. |

**Não considerar build, TypeScript, Lighthouse ou conformidade WCAG aprovados até execução real dos testes correspondentes.**

## 4. Inventário de alegações e conteúdo

### Base segura para esta demonstração

- Uso do nome visual “JS INOX”, presente na logo fornecida.
- Localização “Fortaleza — CE”, relatada no material fornecido.
- Descrição do material como categorias divulgadas no perfil/informações fornecidas, e não como comprovação independente de capacidade.
- Proposta de organizar o contexto e os dados disponíveis para uma avaliação inicial.
- Informação de que o formulário demonstrativo não envia nem armazena os dados.

### Uso condicional — requer confirmação comercial

- Bancadas, pias, tanques, coifas para cozinhas industriais, corrimãos, guarda-corpos.
- Escadas, coberturas, estruturas de sustentação e portões.
- Portfólio sob medida e quais modalidades de fornecimento/execução são oferecidas.
- Destaque dos segmentos comercial, industrial e residencial.
- Uso da expressão “estruturas metálicas” como descrição principal da atuação.
- Dados de contato, cobertura geográfica, condições comerciais e eventuais requisitos técnicos.

### Bloqueado até validação

- Andaimes, escoras e plataformas como oferta atual e modalidade disponível.
- Cases, obras, fotos de projetos, depoimentos, marcas e logos de clientes.
- Quantidades, resultados, certificações, homologações, alegações de liderança, garantias, prazos e afirmações de atendimento nacional.
- A assinatura complementar oficial: “e cozinhas” versus “e Estruturas”.
- Razão social, CNPJ, endereço completo, telefone, e-mail e links legais não fornecidos.

## 5. Dependências e ativos

- Runtime/build: Astro (`^5.7.0`), TypeScript (`^5.7.3`) e `@astrojs/check` (`^0.9.4`).
- A instalação exige acesso a um registro npm ou cache local compatível.
- Não foram adicionadas bibliotecas de animação, ícones ou analytics.
- Não são carregadas fontes remotas; a tipografia usa uma pilha de fontes do sistema.
- Os logotipos foram fornecidos pelo usuário; a licença/registro da marca não foi auditada.

## 6. Pendências antes de uma futura publicação

1. Confirmar o nome complementar/assinatura institucional.
2. Aprovar cada categoria comercial e sua modalidade (fabricação, fornecimento, instalação, manutenção, venda, locação ou outras).
3. Confirmar cobertura geográfica e limites de atendimento.
4. Selecionar fotos próprias com autoria e autorização de uso.
5. Confirmar os dados de contato e informações legais.
6. Instalar dependências e executar build/TypeScript.
7. Fazer inspeção visual desktop/mobile e verificar links, menu, FAQ e validação do formulário.
8. Executar testes de acessibilidade, contraste e performance; registrar resultados reais.
9. Revisar todos os textos para uso comercial definitivo.