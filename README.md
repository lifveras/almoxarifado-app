# Criando a primeira versão de uma API

Durante o curso, iremos desenvolver uma pequena aplicação para gerir acesso de itens de almoxarifado do IFSP. Inicialmente vamos criar o back-end com a API da nossa aplicação.

## Estrutura da API

Siga os passos para realizar a atividade:

1. Crie a estrutura de diretórios do projeto dentro de uma pasta back-end.

```
src
│   app.js          # Configurações do servidor
│   server.js       # Server para iniciar o app
|   .env            # Configuração das variaveis de ambiente
└───api             
  └───controllers   # Funções da controllers do express route
  └───routes        # Definição de rotas express
  └───database      # Código relacionado ao banco de dados
    └───model       # Modelos do banco de dados
    └───seed        # Seeds para popular o banco
  └───repositories  # Query builders
└───test            # Arquivos de teste do Jest.
```

Para facilitar, use os comandos de terminal a seguir a partir do diretório do projeto.

> nul \> app.js 
>
> nul \> server.js 
>
> nul \> .env 
>
> md src\api
>
> md src\api\controllers
>
> md src\api\services
>
> md src\api\routes
>
> md src\api\repositories
>
> md src\api\database
>
> md src\api\database\model
>
> md src\api\database\seed
>
> md test

2. Inicialize o diretório como um projeto node com o comando

> npm init

Informe que o arquivo server.js é o ponto de entrada

3. instale as dependências a seguir

> npm install -s express body-parser cors
>
> npm install --save-dev nodemon

- [express](https://expressjs.com/pt-br/starter/hello-world.html)
- [cors](https://expressjs.com/en/resources/middleware/cors.html)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)


## Programando a API

Vamos iniciar a programação. Os códigos estão nos arquivos disponíveis no repositório deste arquivo.

1. Iremos representar dados de items de almoxarifado para controle de patrimônio. Para tal criamos o model ItemPatrimonio. Criamos esse arquivo com seu código em  (back-end/src/api/database/model).

2. Vamos simular um banco de dados. Criando o arquivo database.js em (back-end/src/api/database), vamos ter uma instância de uma classe que simula um banco de dados para armazenar os dados acessados pela nossa API.

3. Criamos também um arquivo de seed, para inserir dados iniciais no nosso banco. O arquivo será criado em (back_end/src/api/database/seed).

4. Agora vamos criar o arquivo dentro de (back_end/src/api/repository). Nele iremos manter os comandos definidos para consultas ao banco relacionada a cada model.

5. Agora vamos criar o arquivo dentro de (back_end/src/api/repository). Nele iremos manter os comandos definidos para consultas ao banco relacionada a cada model.

6. Em (back_end/src/api/controllers), defina os callbacks/handlers que irão tratar das requisições a cada um dos endpoints da sua API. Tenha **atenção** na forma como os comandos de envio de respostas são sempre invocados em um contexto assíncrono. 

7. Em (back_end/src/api/routes), defina as utlizando o módulo Routes() do express. Para cada conjunto de rotas, um arquivo separada deve ser criado.

8. Configure agora o (back_end/app.js) para receber as rotas configuradas e os demais middlewares por meio do método use do express.

9. Por fim configure o server.js para inicializar. 

10. Execute a partir do diretório base do servidor com o comando

> npx nodemon server.js

## Porque tanta divisão?

Para que haja separação de responsabilidade das partes do programa.

Veja uma discussão em [Como organizar e estruturar projetos com Node.js](https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899)

Além disso, essa separação leva a atender alguns dos príncipios SOLID. Veja mais em [Princípios SOLID: Single Responsability Principle](https://www.treinaweb.com.br/blog/principios-solid-single-responsability-principle).