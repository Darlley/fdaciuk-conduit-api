# [CURSO] API NODE.JS + TYPESCRIPT COM PROGRAMAÇÃO FUNCCIONAL

**PORTS AND ADPTERS ARCHTECTURE**

- https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)

Regras de negócios fica no Core.
Core é desacoplado de todos os serviços externos, são os adapters que se comunicam com o core.

- Repositório do projeto: https://github.com/fdaciuk/conduit-api
- Especificação da API: https://gothinkster.github.io/realworld/docs/specs/backend-specs/introduction

## [001 - API em Node.js + TypeScript com Programação Funcional - Apresentação do projeto](https://youtu.be/G-wGMfiLW0Y?list=PLr4c053wuXU_2sufpBUxu3bLRBbyWt4lX)

1. Você tem um tipo CreateUserType com os dados do usuário
2. Uma função register que usa conceitos funcionais como `TaskEither` e `pipe`
3. Um teste para verificar se o registro funciona

O padrão funcional aqui é:

- Currying (funções que retornam funções)
- Tratamento de erros como valores (não exceções)
- Composição de funções (uma função envolve outra)

Tudo isto esta organizado da seguite forma:

- core/types/user.ts
- core/use-cases/user/register.ts
- core/use-cases/user/register.test.ts

Explicação: [Claude](https://claude.ai/share/1787dbbd-c15c-4234-b00b-b2418d316ec3)

**LINKS**
Lidando com valores opcionais no React com fp-ts:
- https://www.youtube.com/watch?v=kf0Ny1xsbBI

Haskell para programadores JavaScript (como programar de forma puramente funcional em JS):
- https://www.youtube.com/watch?v=pUN3algpvMs

Lazy evaluation do Haskell aplicado em JS:
- https://www.youtube.com/watch?v=E5yAoMaVCp0

Functional Architecture (Arquitetura Hexagonal):
- https://www.youtube.com/watch?v=US8QG9I1XW0

Functional Design Patterns:
- https://www.youtube.com/watch?v=srQt1NAHYC0

From Dependency Injection to dependency rejection:
- https://www.youtube.com/watch?v=cxs7oLGrxQ4

Typed Functional Programming in TypeScript with fp-ts:
- Video: https://www.youtube.com/watch?v=UwCLmHQOWoY
- Slides: https://noti.st/robinpokorny/eayxlR/slides

Teoria das categorias
- https://www.youtube.com/watch?v=I8LbkfSSR58&list=PLbgaMIhjbmEnaH_LTkxLI7FMa2HsnawM_