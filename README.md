# JS INOX — Website corporativo

Landing page corporativa responsiva em Astro + TypeScript + CSS, com prévia HTML offline.

## Prévia rápida
1. Clone ou baixe este repositório.
2. Abra `preview.html` no navegador para ver a demonstração offline.
3. Teste navegação, FAQ e formulário demonstrativo.

## Desenvolvimento local
Requisitos: Node.js 20.3+ e npm.

```bash
npm install
npm run dev
```

Para verificar o projeto e gerar a saída estática:

```bash
npm run check
npm run build
```

## Escopo e limitações
- O site apresenta categorias divulgadas pela JS INOX: soluções em aço inox, estruturas e soluções metálicas e projetos sob medida.
- As categorias mencionadas em material público não são tratadas como prova automática de capacidade operacional.
- A seção de projetos aguarda imagens próprias autorizadas e informações validadas.
- O formulário é demonstrativo: valida localmente, sem envio, transmissão ou armazenamento.
- Não há WhatsApp, e-mail, CRM, analytics, pixels ou rastreamento integrados.
- Não há deploy configurado nem publicação automática.
- `public/brand/` contém as versões WebP otimizadas do logotipo horizontal e do símbolo oficial usados pela página.
- A denominação complementar da marca segue pendente de aprovação (a logo original contém “e cozinhas”, enquanto o nome informado no perfil é “JS Inox e Estruturas”).

## Estrutura

- `src/components/`: cabeçalho, rodapé, seções e componentes de interface.
- `src/data/`: conteúdo, navegação e FAQ.
- `src/layouts/` e `src/pages/`: estrutura Astro da página.
- `src/styles/`: design tokens e estilos responsivos.
- `public/brand/`: assets de marca usados pelo site.
- `preview.html`: demonstração offline.
- `docs/`: documentação estratégica.
- `tests/`: verificação estática.

Consulte `RELATORIO-VALIDACAO.md` e `TESTES-MANUAIS.md` para os testes executados e pendências. Antes de qualquer publicação real, validar comercialmente as categorias e modalidades, assinatura de marca, imagens, dados de contato, informações legais e condições de atendimento.