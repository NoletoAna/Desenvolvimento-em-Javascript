# Validação de E-mail com JavaScript

Projeto desenvolvido para a aula prática da disciplina **Desenvolvimento em JavaScript**.

Formulário HTML simples com um campo de e-mail validado em JavaScript no lado do cliente (client-side). Ao clicar em **Validar**, a página informa se o e-mail é válido ou exibe uma mensagem orientando como preenchê-lo corretamente.

## Funcionalidades

- Validação do e-mail por meio de expressão regular (regex).
- Mensagem de sucesso em verde quando o e-mail é válido.
- Mensagem de erro em vermelho quando o e-mail é inválido ou o campo está vazio, explicando a estrutura correta de um e-mail: nome do usuário, o símbolo `@` e um domínio válido (ex.: `usuario@dominio.com`).

## Estrutura do projeto

```
├── index.html   # Estrutura da página e do formulário
├── style.css    # Estilização e cores das mensagens
└── script.js    # Função validarEmail()
```

## Lógica de validação

A função `validarEmail()` lê o valor do campo, remove espaços extras com `trim()` e testa o texto com a expressão regular:

```js
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
```

| Parte | Significado |
| --- | --- |
| `[a-zA-Z0-9._%+-]+` | Nome do usuário |
| `@` | Símbolo arroba (obrigatório) |
| `[a-zA-Z0-9.-]+` | Nome do domínio |
| `\.[a-zA-Z]{2,}` | Ponto seguido da extensão, com ao menos 2 letras (`.com`, `.br`) |

O resultado é exibido na própria página, alterando o texto (`textContent`) e a classe CSS (`className`) do elemento de mensagem.

## Exemplos

| Entrada | Resultado |
| --- | --- |
| `aluno@unic.edu.br` | ✅ E-mail válido e registrado com sucesso! |
| `alunounic.com` | ❌ Formato inválido (falta o `@`) |
| `aluno@unic` | ❌ Formato inválido (falta a extensão do domínio) |
| *(campo vazio)* | ❌ Formato inválido |

## Como executar

Basta abrir o arquivo `index.html` em qualquer navegador. Não há dependências nem instalação.

O projeto também pode ser executado no [Playcode.io](https://playcode.io), plataforma indicada no roteiro da aula: crie um projeto vazio e cole o conteúdo dos três arquivos.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## Autora

Ana Carolina Noleto dos Santos — Cuiabá - MT, 2026.
