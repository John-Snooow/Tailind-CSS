# Guia de Execucao - Refund

## Visao geral
- `refund-api/`: API REST em Node.js + Express + Prisma (SQLite).
- `refund/`: front-end em React + Vite + Tailwind.

## Pre-requisitos
- Node.js 20.x (ou superior).
- npm 10.x (instalado com o Node.js).
- Git (opcional para clonar o repositorio).
- Um cliente HTTP como Insomnia ou Postman para testar a API (opcional).

## Passo a passo rapido
1. Abra dois terminais na pasta `Tailind-CSS`.
2. No primeiro, execute os comandos do back-end descritos em "Executar o back-end".
3. No segundo, siga os comandos de "Executar o front-end".
4. Acesse `http://localhost:5173` no navegador, com o back-end ativo em `http://localhost:3333`.

## Executar o back-end (`refund-api/`)
1. `cd refund-api`
2. Instale as dependencias: `npm install`
3. Configure o banco SQLite local:
   - Se for a primeira vez, execute `npx prisma migrate deploy` para aplicar as migracoes existentes.
   - Opcionalmente, execute `npx prisma studio` para inspecionar os dados em `prisma/dev.db`.
4. Garanta que a pasta `tmp` existe (ja vem no repo) e possui permissao de escrita, pois os uploads sao gravados ali.
5. Inicie o servidor em modo desenvolvimento: `npm run dev`
6. A API abre em `http://localhost:3333`. Os arquivos enviados sao servidos via `http://localhost:3333/uploads/<arquivo>`.

### Endpoints principais
- `POST /sessions`: autentica um usuario e retorna o token JWT.
- `POST /users`: cadastra novos usuarios (papel padrao `employee`).
- `GET /refunds`: lista reembolsos do usuario autenticado.
- `POST /refunds`: cria reembolsos (aceita upload de imagens JPEG/PNG ate 1 MB).
- `PATCH /refunds/:id`, `DELETE /refunds/:id`: atualiza ou remove reembolsos.
- `POST /uploads`: rota interna usada para upload de comprovantes.

O segredo JWT padrao esta em `src/configs/auth.ts`. Ajuste-o se necessario antes de subir para producao.

## Executar o front-end (`refund/`)
1. Abra outro terminal na raiz do projeto e rode `cd refund`
2. Instale as dependencias: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`
4. O Vite informa a URL (padrao `http://localhost:5173`). Certifique-se de que a API esta rodando em `http://localhost:3333`, conforme configurado em `src/services/api.ts`.
5. Para gerar uma versao otimizada para deploy, use `npm run build` e depois `npm run preview` para validar o build localmente.

## Fluxo sugerido de desenvolvimento
- Rode `npm run dev` em `refund-api/` e `refund/` em terminais separados.
- Utilize o Insomnia/Postman para criar o primeiro usuario via `POST /users`.
- Faca login na aplicacao web usando o email/senha criados e valide o fluxo de reembolso.

## Dicas e solucao de problemas
- Porta ocupada: altere `PORT` em `refund-api/src/server.ts` ou use `npm run dev -- --port <nova_porta>` no Vite.
- Erros de banco: delete `prisma/dev.db` e execute `npx prisma migrate dev` para recriar o SQLite.
- Uploads falham: verifique tipos de arquivo (JPEG/PNG) e limite de 1 MB definidos em `refund-api/src/configs/upload.ts`.

## Proximos passos para deploy
- Substitua o segredo JWT por uma variavel de ambiente.
- Configure armazenamento de arquivos persistente (S3, buckets locais ou anexe `tmp/uploads` a um volume).
- Ajuste o `baseURL` em `refund/src/services/api.ts` conforme o endpoint usado em producao.
