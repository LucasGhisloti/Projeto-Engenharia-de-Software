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

Após clonar o projeto realize os seguintes comandos:

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
