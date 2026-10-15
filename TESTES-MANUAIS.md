# Roteiro de testes manuais

## Navegação

- [ ] Clicar em todos os links do cabeçalho e do rodapé; verificar se chegam à seção correta.
- [ ] Em largura mobile, abrir e fechar o menu pelo botão.
- [ ] Verificar o estado `aria-expanded` no menu e fechar com Escape.
- [ ] Confirmar que o menu fecha ao selecionar um link.
- [ ] Usar apenas teclado para percorrer links, botões, FAQ e formulário.

## FAQ

- [ ] Abrir e fechar cada pergunta usando mouse e teclado.
- [ ] Confirmar que a resposta fica legível, sem sobrepor outro conteúdo.

## Formulário demonstrativo

- [ ] Acionar “Simular validação” sem preencher campos obrigatórios.
- [ ] Confirmar mensagens para empresa, categoria e descrição.
- [ ] Preencher os campos obrigatórios com valores válidos e repetir a validação.
- [ ] Confirmar a mensagem exata: “Validação local concluída. Nenhuma solicitação foi enviada.”
- [ ] Conferir em ferramentas de rede do navegador que não houve requisição de envio.
- [ ] Recarregar a página e confirmar que os valores não foram persistidos.

## Layout e acessibilidade

- [ ] Revisar em 390, 768, 1024, 1440 e 1920 px.
- [ ] Verificar rolagem horizontal, legibilidade, corte de títulos e espaçamentos.
- [ ] Verificar foco visível e zoom do navegador em 200%.
- [ ] Ativar redução de movimento no sistema e confirmar que transições não são essenciais.
- [ ] Executar uma auditoria automatizada de acessibilidade e revisar manualmente as falhas detectadas.