# Notas do desenvolvedor
O projeto por padrão utiliza a porta _8080_. Pode ser alterar pela variável de ambiente _PORT_ ou adicionando a diretiva _PORT_ ao **.env**

# 1. Instalação e configuração
Antes de mais nada, clone do repositório: `git clone https://bitbucket.org/luisfedrizze/shellbox-rest/`
Após clonar, basta acessar a pasta do projeto e realizar a instalação:
```
cd shell-box
npm install
```

## 1.1. Variáveis de ambiente (dotenv)
O projeto utiliza os recursos do pacote _dotenv_ para configurar variáveis de ambiente. Um exemplar das variáveis que deverão ser configuradas está no arquivo **.env.example**.
Faça uma cópia (ou renomeie) o arquivo **.env.example** para **.env** e configure as variáveis de ambiete de acordo com a descrição a seguir:

```dotenv
DB_USER=root        // Nome de usuário do banco de dados
DB_PASS=secret      // Senha do usuário do banco de dados
DB_NAME=todotasks   // Banco de dados
DB_HOST=localhost   // Host
DB_PORT=3306        // Porta de conexão
```

## 1.2. Migrations com sequelice-cli
O projeto contém migrations para o banco de dados. Como ORM, o projeto utiliza o pacote Sequelize ORM. Para rodar as migrations, instale o sequelize-cli globalmente via _npm_:
```shell
npm install -g sequelize-cli
```

Após instalar o sequelize-cli, basta rodar as migrations:
```shell
sequelize db:migrate
```

Para saber se o sequelice-cli foi instalado com sucesso, no diretório do projeto basta rodar o comando `sequelize --version`.
Para mais comandos do sequelize-cli, rode o comando `sequelize --help`.

# 2. Iniciando o projeto
Para iniciar o projeto em ambiente de _desenvolvimento_ basta rodar o comando `npm start`. O nodemon irá iniciar automaticamente o arquivo **server.js**
