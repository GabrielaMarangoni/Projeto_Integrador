<br/>

<p align="center"><a href="" target="_blank"><img src="https://github.com/GabrielaMarangoni/Projeto_Integrador/blob/README/logo.svg?raw=true" height="250"></a></p>
<p align="center"
<span>Créditos do logo ao @PauloCremozo - Twitter</span>
</p>
<br/>

<p align="center">
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components"/>
    <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS"/>
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma"/>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
   
   
</p>

# Turistando
## Descrição do software
O Turistando vai ser uma plataforma com o mesmo intuito de uma rede social, mas focado para compartilhamento e busca de opiniões e localizações para passeios, trilhas, fotografias, monumentos, etc em uma cidade selecionada pelo usuário. O usuário poderá selecionar a cidade que busca e qual é seu intuito, através de tag, e então poderá ver quais os melhores locais através de opiniões de outros usuários.


## Principais funcionalidades
- Buscar cidade de interesse
- Buscar tag de interesse
- Filtrar tag através de cidade
- Mostrar comentários de outros usuários dentro da cidade selecionada
- Adicionar novas opiniões a respeito das cidades selecionadas
- Adicionar fotos ao local selecionado


## Stack 
- React (Front-end)
- Node JS (Back-end)
- MSQL (Back-end)

## Dependências do Front-end
- Styled Components
- React Aws S3
- React Icons
- React Router Dom

## Dependências do Banck-end
- Cors
- MySQL2
- Sequelize
- UUIDV4
- Express


## :warning: IMPORTANTE
### Back-end
No arquivo ***src/shared/infra/sequelize/config.json*** é necessário adequar os dados no banco de dados do seu computador.
> Por padrão a porta utilizada é 3306. Caso a porta utilizada não seja a padrão, adicionar a chave port.
```json
{
    "dialect": "mysql",
    "host": "localhost",
    "username": "root",
    "password": "123456",
    "database": "turistando2" ,
    "port": 3306,
    "define": {
        "timestamps": true,
        "underscored": true
    }
}
```

### Front-end
A aplicação ***Turistando*** utiliza variáveis de desenvolvimento, então se faz necessário a criação de um arquivo _.env_ no diretório frontend. Por favor, utilize o arquivo _.env.example_ como exemplo.

## Executando a aplicação

### Banco de dados
Caso você utilize Docker, execute: 
```
docker run -p 3306:3306 --name turistando2 -e MYSQL_ROOT_PASSWORD=123456 -d mysql
```
> Esse comando criará um banco de dados MySQL no Docker usando a porta 3306 de nome turistando2, na qual a senha é 123456 e o usuário é root.
Caso você utilize algum software de banco de dados (DBeaver, MySQL, Workbench, BeeKeeper, etc), crie a sua conexão  
  
Depois de criar o seu banco de dados e estabelecer sua conexão, execute os comandos dentro da pasta Backend:
```
yarn && yarn sequelize db:migrate
```
> O yarn instalará todas as dependências do projeto backend e o comando sobre sequelize executará as migrations no seu bando de dados.

### Back-end
Depois de feito os comandos relacionados ao banco de dados e, caso necessário, alterar o arquivo de configuração do sequelize, execute:
```
yarn dev:server 
```
> Caso queira realizar testes de API, utilize softwares como Insomnia ou Postman


## Front-end
Na pasta frontend instale as dependências com o comando:
```
yarn 
```
Rode o frontend executando:
```
yarn start
```
> A aplicação Turistando utiliza um serviço pago da AWS, por esse motivo e devido a protocolos http, instale a extensão Allow Cors
[Extenão Cors](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)




### Contato
| Nome                          | Contato                                |
| ----------------------------- |:--------------------------------------:|
| Gabriela Marangoni Radigonda  | gabrielaradigonda@alunos.utfpr.edu.br   |

