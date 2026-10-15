# JS INOX — Website corporativo

Landing page corporativa responsiva em Astro + TypeScript + CSS, com prévia HTML offline.

## Deploy na Vercel

O projeto usa Astro com geração estática. O arquivo `vercel.json` define o framework Astro, o comando `npm run build` e a saída `dist`.

Configuração recomendada na Vercel:
- **Framework Preset:** Astro
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node.js:** 22.x (o projeto declara mínimo 20.3.0)

O aviso de `cache-dir` pode vir de uma variável/configuração de ambiente do projeto na Vercel; não é definido pelo repositório. Verifique as variáveis de ambiente e configurações de instalação caso o aviso continue.

Os scripts de instalação de `esbuild` e `sharp` foram declarados como permitidos no `package.json`, pois são dependências usadas no ecossistema Astro. O npm pode mostrar avisos sobre scripts de instalação dependendo da versão/configuração do gerenciador.

Antes da publicação de produção, execute:
```bash
npm install
npm run test:static
npm run build
```

**Nota:** o repositório ainda precisa de um `package-lock.json` gerado com acesso ao npm registry e commitado para garantir instalações reproduzíveis. Não considerar o deploy validado até que `npm run build` conclua sem erros.

## Prévia rápida

1. Clone ou baixe este repositório.
2. Abra `preview.html` no navegador para ver a demonstração offline.
3. Teste navegação, FAQ e formulário demonstrativo.

## Escopo e limitações

- O site apresenta categorias divulgadas pela JS INOX: soluções em aço inox, estruturas e soluções metálicas e projetos sob medida.
- As categorias mencionadas em material público não são tratadas como prova automática de capacidade operacional.
- A seção de projetos aguarda imagens próprias autorizadas e informações validadas.
- O formulário é demonstrativo: valida localmente, sem envio, transmissão ou armazenamento.
- Não há WhatsApp, e-mail, CRM, analytics, pixels ou rastreamento integrados.
- A denominação complementar da marca segue pendente de aprovação (a logo original contém “e cozinhas”, enquanto o nome informado no perfil é “JS Inox e Estruturas”).

## Desenvolvimento local

Requisitos: Node.js 20.3+ e npm.

```bash
npm install
npm run dev
```

Para verificar e gerar a saída estática:

```bash
npm run check
npm run build
npm run preview
```

## Estrutura

- `src/components/`: cabeçalho, rodapé, seções e componentes de interface.
- `src/data/`: conteúdo, navegação e FAQ.
- `src/layouts/` e `src/pages/`: estrutura Astro da página.
- `src/styles/`: design tokens e estilos responsivos.
- `public/brand/`: ativos de marca usados pela página.
- `preview.html`: demonstração offline.
- `docs/`: documentação estratégica.
- `tests/`: verificação estática.

Consulte `RELATORIO-VALIDACAO.md` e `TESTES-MANUAIS.md` para as pendências conhecidas. Antes de publicar, validar comercialmente as categorias, assinatura da marca, imagens, dados de contato, informações legais e condições de atendimento.
