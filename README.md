# <b>Quake API</b>
#### Aplicação feita em NodeJS (Typescript) responsável por ler os logs do Game Quake e expor os dados em API.


</br>

### <b>Dependências:</b>
* NodeJS
* Typescript
* Express
* Cors
* Jest
* Eslint
* Prettier


### <b>Importante:</b>
É necessário adicionar o arquivo de log games.log na pasta files antes de executar a aplicação.



#
### <b>Rotas da aplicação:</b>
 <b>Importante</b>: Alterar a porta da aplicação conforme arquivo de variáveis de ambiente.

 - [Coletar Games] - GET / http://localhost:8000/api/games


#
### <b>Configuração das variáveis de ambiente:</b>
<b>Importante</b>: Deve ser criado um arquivo .env na raiz no projeto, seguindo as variáveis de ambiente do arquivo de exemplo:
 - [Exemplo de variáveis de ambiente](.env.example)


#
### <b>Instalação das dependências:</b>
```bash
$ npm install
```


#
### <b>Comandos para inicializar a aplicação:</b>
```bash
# Buildar aplicação
$ npm run build

# Modo desenvolvimento
$ npm run start:development
```


#
### <b>Comandos para inicializar os testes:</b>
```bash
# Testes unitários
$ npm run test

# Cobertura de testes
$ npm run test:coverage
```


#
### <b>Comandos para inicializar o Eslint:</b>
```bash
# Eslint
$ npm run lint

# Eslint - Ajustar
$ npm run lint:fix
```