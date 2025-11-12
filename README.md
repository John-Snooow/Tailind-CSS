# Tailind-CSS

Monorepo com duas aplicações que formam o Refund:
- `refund/`: front-end em React + Vite + Tailwind CSS.
- `refund-api/`: API REST em Node.js + Express + Prisma (SQLite).

## Pré-requisitos
- Node.js 20.x (ou superior) e npm 10.x (instalado junto com o Node).
- Git para clonar o repositório (opcional).
- Cliente HTTP como Insomnia/Postman para testar a API (opcional).

## Passo a passo rápido
1. Abra dois terminais na pasta `Tailind-CSS`.
2. Em um terminal rode a API (instruções abaixo).
3. No outro terminal rode o front-end.
4. Acesse `http://localhost:5173` com a API ativa em `http://localhost:3333`.

## Back-end (`refund-api/`)
```bash
cd refund-api
npm install

# Gera o cliente Prisma e aplica as migrações no SQLite local (prisma/dev.db)
npx prisma migrate dev
npx prisma generate

# Opcional: abra o Prisma Studio para inspecionar os dados
npx prisma studio

# Sobe o servidor Express em modo watch (porta 3333)
npm run dev
```

Observações:
- O banco padrão é um arquivo SQLite em `refund-api/prisma/dev.db`, conforme `refund-api/prisma/schema.prisma`. Ajuste o datasource se quiser outro banco.
- Se precisar limpar o banco, exclua `prisma/dev.db` e execute novamente `npx prisma migrate dev`.
- Os arquivos enviados pela API são guardados em `refund-api/tmp`.

## Front-end (`refund/`)
```bash
cd refund
npm install
npm run dev
```
O Vite exibirá a URL no terminal (por padrão `http://localhost:5173`). Certifique-se de que o `baseURL` usado nos serviços HTTP (arquivo `refund/src/services/api.ts`) aponta para a porta da API.

## Comandos úteis do Prisma
- `npx prisma migrate dev --name <nome>`: cria/aplica uma nova migração durante o desenvolvimento.
- `npx prisma migrate deploy`: aplica apenas migrações existentes (útil em produção/CI).
- `npx prisma generate`: regenera o cliente Prisma após alterar `schema.prisma`.
- `npx prisma studio`: abre UI para navegar e editar os dados rapidamente.
