# Projeto App Prisma

## Réplica do arbnb

instalar
` yarn add prisma typescript ts-node @types/node --save-dev`

criar pasta src
e o arquivo app.ts local onde ficará o core

instalar
`npx prisma init`

-   cria uma pasta prisma/schema.prisma e um arquivo .env

instalar o postgres
`yarn prisma migrate dev --name 'nome da migrate'`

Criar a pasta controllers

Para rodar o projeto:
`yarn ts-node src/app.ts`

SGBD
`npx prisma studio`

</br>
<hr>
Crédito:

[dogcode](https://www.youtube.com/watch?v=btaePK6RzgA&t=242s&ab_channel=dogcode)
