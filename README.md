# Projeto-Engenharia-de-Software

**Tecnologias utilizadas**
- NodeJS
    - Express
    - Sequelize
- RabbitMQ
- MySQL
    - SQLite


## Como usar o sistema

#### **Setup**
Primero será necessário instalar o RabbitMQ:
 - Acesse o site <https://www.rabbitmq.com/install-windows.html> para fazer o dowload do instalador. 
   - Para poder utilizar o RabbitMQ, é necessário instalar também o Erlang, mas o próprio instalador do Rabbit irá redirecioná-lo a página de download do Erlang,
     caso você ainda não o tenha instalado.
 - Após completar as instalaçãoes, será necessário ativar o Management Plugin:
   - No prompt de comando acesse a pasta sbim dentro da pasta de instalação do Rabbit, exemplo: C:\Program Files\RabbitMQ Server\rabbitmq_server-3.11.4\sbin
   - E então execute o comando abaixo:
   ```
       rabbitmq-plugins enable rabbitmq_management
   ```
   - Acesse no seu navegador a página: http://localhost:15672/ e logue na interface com usuário guest e senha guest.
   - Por fim, na aba Queues da interface, adicione uma fila com o nome: StatusConsultas.

Após instalar o rabbitMQ, clone o projeto e realize os seguintes comandos:

 - `npm install`  (Para instalar as dependências do projeto)
 - `npm start`   (Comando para iniciar o projeto)
 - `node listener.js` (Em outro terminal, rode esse comando para iniciar o listener para teste da resposta de callback)


Com o servidor rodando na sua máquina local, você irá precisar de algum programa para testar APIs, como Postman ou Insomina.

Com um programa para testar APIs, os seguintes endpoints estarão disponíveis

 - `GET /insereDados` 
    - Endpoint que irá adicionar dados pré definidos de clientes e histórico de transação para avaliação do projeto
- `POST /credito/solicitacao`
    - Endpoint que necessita de um corpo com a seguinte estrutura:

        ```
        {
            "user_id": 1, // Podendo ser um valor de 1-5, como base no que foi inicialmente inserido
            "valor" : 12000, // Valor da solicitação de crédito
            "localizacao" : "SP", // Local onde foi feita essa solicitação
            "callback": "http://localhost:3000/credito/resposta" // Callback de resposta
        }
        ``` 
        Isso irá gerar a ação de envio da solicitação de crédito para analise, e retornará uma resposta quando a analise for finalizada. 
