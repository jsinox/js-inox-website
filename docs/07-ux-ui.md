# 07 — Diretrizes UX/UI | JS INOX

**Status:** direção de design proposta com base no Master Prompt e nas informações da marca; sujeita a revisão visual e aprovação.

## 1. Direção visual

**Industrial Corporate Minimalism.** Transmitir solidez, precisão, clareza e profissionalismo com superfícies claras, contraste escuro, acentos vermelhos, referências discretas ao aço e espaçamento generoso.

Evitar estética de oficina genérica, excesso de cromado, gradientes chamativos, neon, sombras pesadas, ícones multicoloridos e animações que prejudiquem a navegação.

## 2. Identidade e marca

- Usar os arquivos originais de logo fornecidos, sem redesenhar, reconstruir, distorcer ou trocar cores.
- Versão horizontal para cabeçalho, caso a relação de aspecto e fundo sejam adequados após inspeção.
- Versão principal/vertical em contextos em que a proporção faça sentido.
- Símbolo isolado somente se a versão fornecida tiver sido aprovada para esse uso.
- Se houver dúvida sobre transparência, legibilidade ou variante, preservar a imagem original em uma área de fundo compatível; não alterar o arquivo original.
- Manter “JS INOX” como foco visual provisório. A assinatura “e cozinhas” versus “e Estruturas” precisa de decisão de marca.

## 3. Tokens de partida

Cores sugeridas no Master Prompt, ainda a conferir com os assets originais:

```css
:root {
  --color-brand-red: #B90E16;
  --color-black: #111111;
  --color-graphite: #292C30;
  --color-white: #FFFFFF;
  --color-ice: #F5F6F7;
  --color-steel: #B8BDC2;
  --color-border: #E2E4E6;
}
```

Esses valores são tokens iniciais, não cores extraídas definitivamente do logo. Confirmar contraste e visual antes de consolidar.

## 4. Tipografia e layout

- Títulos: Manrope, Sora ou equivalente de licença adequada.
- Texto de corpo: Inter ou equivalente de boa legibilidade.
- Não carregar fontes externas desnecessárias; verificar licença e estratégia de carregamento.
- Container máximo de referência: 1200–1280 px.
- Texto de corpo: 16–18 px como ponto de partida.
- Headline principal fluida, com referência `clamp(2.5rem, 5vw, 5rem)` e ajuste visual real.
- Usar CSS Custom Properties e uma escala de espaçamento consistente.

## 5. Arquitetura de página

1. **Header:** logo oficial, links Sobre, Soluções, Como funciona, Avaliação de demanda; CTA “Apresentar minha demanda”.
2. **Hero:** aço inox e estruturas metálicas; proposta clara, CTA principal e secundário.
3. **Apresentação institucional:** abordagem baseada em entender a aplicação, contexto e requisitos.
4. **Entendimento da demanda:** informações que ajudam a explicar a necessidade.
5. **Segmentos:** comercial/B2B como prioridade proposta; residencial e industrial conforme informação pública relatada, a confirmar como foco.
6. **Frentes de solução:** soluções em aço inox; estruturas e soluções metálicas; projetos sob medida.
7. **Processo de avaliação:** quatro etapas, sem garantir execução.
8. **Oferta de entrada:** avaliação inicial de demanda.
9. **Projetos e comprovações:** placeholder honesto até seleção e aprovação de conteúdo próprio.
10. **FAQ:** acordeão acessível com seis perguntas do Master Prompt.
11. **Formulário demonstrativo:** validação exclusivamente local.
12. **CTA final:** retorno ao formulário ou à explicação do processo.
13. **Footer:** nome aprovado, descrição, links e localização confirmada; contatos/legais pendentes.

## 6. Componentes propostos

- Header e menu mobile.
- Botão primário e secundário.
- Título de seção.
- Cards de informação/solução.
- Etapas de processo.
- Acordeão FAQ.
- Campos de formulário com estados, mensagens associadas e feedback.
- Aviso de conteúdo aguardando validação.
- Rodapé institucional.

Componentes devem ser reutilizáveis sem abstração excessiva. Todo CTA precisa ter destino ou comportamento definido.

## 7. Responsividade

Validar pelo menos em 360–390 px, 768 px, 1024 px, 1440 px e 1920 px.

- Adotar abordagem mobile-first.
- Evitar rolagem horizontal.
- Menu mobile acessível por teclado e com estado perceptível.
- Transformar timeline horizontal em vertical no mobile.
- Ajustar cards em grids responsivos.
- Preservar hierarquia, contraste e área de toque confortável.
- Não permitir que o hero esconda a proposta de valor ou o CTA.

## 8. Acessibilidade e movimento

Meta: WCAG 2.2 AA, sem declarar conformidade antes dos testes.

- Skip link, HTML semântico e ordem correta de headings.
- Foco visível e navegação integral por teclado.
- Contraste verificado para cada combinação de cor.
- Labels persistentes e erros ligados aos campos.
- Acordeões com estado acessível.
- Feedback não dependente apenas da cor.
- Respeitar `prefers-reduced-motion`.
- Não usar animação como requisito para entender o conteúdo.

## 9. Imagens e comprovações

Priorizar fotos próprias e autorizadas. Na ausência, usar composições gráficas abstratas e claramente ilustrativas, nunca simulando obra executada pela JS INOX. Não inserir logotipos de clientes nem usar imagens de terceiros como portfólio.

## 10. Pendências de design

- Confirmar assinatura complementar da marca.
- Conferir cores reais dos PNGs e contraste.
- Confirmar quais fotos são próprias e autorizadas.
- Aprovar a prioridade de segmentos e os rótulos das categorias.
- Confirmar conteúdo do rodapé e links legais disponíveis.