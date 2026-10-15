# 08 — Plano técnico | JS INOX

**Status:** plano técnico proposto. O repositório existente ainda não foi fornecido para auditoria; a estrutura abaixo é uma referência, não uma descrição do estado atual do projeto.

## 1. Objetivo técnico

Desenvolver uma landing page institucional em Astro + TypeScript + CSS moderno, com saída estática, componentes reutilizáveis, baixo JavaScript no cliente e conteúdo comercial sujeito a validação.

## 2. Restrições operacionais

Não realizar deploy, publicação, DNS, envio de formulário, integração real de WhatsApp, e-mail ou CRM, analytics, pixels ou rastreamento. Não utilizar dados pessoais reais. Não preencher variáveis de ambiente como autorização implícita para ativar integrações.

## 3. Antes de implementar

Quando o repositório for fornecido:

1. Examinar `package.json`, lockfile, estrutura `src/`, `public/`, configurações e testes.
2. Identificar funcionalidades válidas a preservar.
3. Conferir os sete documentos de estratégia e registrar divergências.
4. Verificar assets de marca e licenças de dependências/fontes.
5. Propor substituições somente quando houver justificativa técnica.
6. Aguardar aprovação explícita para iniciar a implementação local.

## 4. Estrutura sugerida

```text
src/
  components/
    layout/
      Header.astro
      Footer.astro
    sections/
      Hero.astro
      Institutional.astro
      DemandContext.astro
      Segments.astro
      Solutions.astro
      Process.astro
      Offer.astro
      Projects.astro
      FAQ.astro
      ContactForm.astro
      FinalCTA.astro
    ui/
      Button.astro
      SectionHeading.astro
      Container.astro
      InfoCard.astro
  data/
    site.ts
    navigation.ts
    faq.ts
    solutions.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    tokens.css
    global.css
public/
  brand/
  images/
tests/
```

Ajustar a estrutura ao repositório real. Evitar duplicar componentes existentes sem necessidade.

## 5. Conteúdo e dados

Separar conteúdo de apresentação quando isso melhorar a manutenção. Cada categoria deve poder carregar um estado editorial, por exemplo `divulgada-pendente-validacao`, para evitar tratar categorias não confirmadas como capacidades aprovadas. Não mostrar publicamente rótulos técnicos internos; eles orientam revisão e aprovação de conteúdo.

Não incluir razão social, telefone, e-mail, endereço detalhado, clientes, resultados, certificações ou dados estruturados não confirmados.

## 6. Formulário de demonstração

- HTML semântico, labels persistentes e validação local.
- Nenhum `fetch`, action externo ou serviço de terceiros.
- Nenhuma persistência em localStorage, cookies, banco ou arquivo.
- Mensagem antes da interação: “Formulário demonstrativo: os dados não serão enviados nem armazenados.”
- Ao validar corretamente: “Validação local concluída. Nenhuma solicitação foi enviada.”
- Erros associados aos campos e anunciáveis por tecnologia assistiva.

## 7. Dependências e ativos

- Preferir CSS nativo e JavaScript mínimo.
- Não instalar bibliotecas de animação sem justificativa, análise de versão, licença e impacto.
- Verificar licença e origem de fontes.
- Preservar arquivos originais da logo; qualquer otimização deve criar cópias e ser conferida visualmente.
- Não carregar imagens remotas ou executar scripts externos desnecessários.

## 8. SEO e performance

- Título, descrição e metadados coerentes com conteúdo aprovado.
- HTML semântico e estrutura correta de headings.
- Dimensões explícitas para imagens; lazy loading abaixo da dobra quando adequado.
- Evitar scripts externos, rastreamento e deslocamento de layout.
- Meta de Lighthouse acima de 90 quando aplicável, sem tratar a pontuação como resultado garantido antes da medição.

## 9. Plano de testes

Registrar somente testes realmente executados.

### Técnica

- Build de produção local.
- Checagem de TypeScript.
- Links internos e referências a assets.
- Revisão de dependências e lockfile.

### Funcional

- Âncoras e navegação.
- Menu mobile.
- FAQ.
- Estados e validação do formulário demonstrativo.
- Confirmação de ausência de transmissão/persistência.

### Visual e responsividade

- Capturas em desktop e mobile.
- Larguras 360–390, 768, 1024, 1440 e 1920 px.
- Logo, alinhamentos, quebras de linha, cores, foco e overflow horizontal.

### Acessibilidade

- Navegação por teclado.
- Foco visível e ordem de foco.
- Contraste.
- Labels, mensagens e headings.
- Redução de movimento.
- Testes automatizados e inspeção manual complementar.

## 10. Registro de saída

Entregar o código revisável, instruções de execução, capturas desktop/mobile, relatório de build/testes, limitações, inventário de claims, dependências/licenças e lista de placeholders. Não afirmar que testes passaram sem executá-los.

## 11. Bloqueios atuais

- Repositório atual não fornecido para auditoria.
- Confirmação das categorias e modalidades de serviço pendente.
- Assinatura de marca pendente.
- Fotos de projetos e autorizações pendentes.
- Dados de contato e informações legais pendentes.
- Aprovação explícita da implementação local pendente.