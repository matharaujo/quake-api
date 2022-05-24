## <b>Quake API</b>


### <b>Dependências:</b>
* NodeJS
* Typescript
* Express
* Cors
* Jest
* Eslint
* Prettier


#
### <b>Rotas da aplicação:</b>
 <b>Importante</b>: É necessário alterar a porta da *URL* conforme a variável *PORT_API* no arquivo de variáveis de ambiente.

 - [Coletar Games] - GET / http://localhost:8000/api/games


#
### <b>Arquivo de LOG:</b>
<b>Importante</b>: É necessário adicionar o arquivo de LOG *games.log* na pasta *files* que se encontra na raiz do projeto.


#
### <b>Configuração das variáveis de ambiente:</b>
<b>Importante</b>: É necessário ser criado um arquivo *.env* na raiz no projeto, seguindo as variáveis de ambiente do arquivo de exemplo:
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
