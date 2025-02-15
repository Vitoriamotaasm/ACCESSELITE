# AccessElite - Tela de Cadastro e Login 💻
Este projeto é uma aplicação Angular que oferece uma tela de cadastro e login moderna e responsiva, integrada com um backend em Spring Boot (Java) e MySQL. O frontend foi desenvolvido com Angular e utiliza uma paleta de cores moderna.

## Funcionalidades 🛠️
- **Tela de Login**: 🪞
  - Campos para e-mail e senha.
  - Validação de formulário.
  - Botões para login com Google e Facebook.
  - Link para cadastro de novos usuários.

- **Tela de Cadastro**: 🪄
  - Campos para nome, e-mail e senha.
  - Validação de formulário.
  - Integração com o backend para salvar novos usuários.

- **Backend**: 💌
  - API RESTful para cadastro e autenticação de usuários.
  - Persistência de dados no MySQL.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Angular**: Framework para desenvolvimento do frontend.
- **SCSS**: Para estilização do projeto.
- **FontAwesome**: Para ícones modernos.
- **ReactiveFormsModule**: Para formulários reativos e validações.

### Backend
- **Spring Boot**: Framework Java para desenvolvimento do backend.
- **MySQL**: Banco de dados para persistência de dados.
- **JPA (Java Persistence API)**: Para mapeamento objeto-relacional (ORM).

### Ferramentas
- **Node.js**: Para execução do frontend.
- **Maven**: Para gerenciamento de dependências do backend.
- **Docker** (opcional): Para containerização da aplicação.

## Pré-requisitos ⚙️

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v16 ou superior)
- **Angular CLI** (opcional, mas recomendado)
- **Java JDK 17**
- **MySQL** (ou Docker, se preferir usar um contêiner MySQL)
- **Maven** (para o backend)

## Instruções de Configuração 📋

## Passo 1: Configurar o Backend
1. **Clone o Repositório:**
    **Clone o repositório**:
   ```bash
   git clone https://github.com/Vitoriamotaasm/TELA-DE-LOGIN.git
   cd accesselite/backend

2. **Configuração do Banco de Dados MySQL 🔧:**
   - Crie um banco de dados chamado `accesselite`.
   - Atualize o arquivo `src/main/resources/application.properties` com as credenciais do MySQL:
    Crie um banco de dados no MySQL:
    ```sql
      spring.datasource.url=jdbc:mysql://localhost:3306/accesselite
      spring.datasource.username=root
      spring.datasource.password=sua_senha
      spring.jpa.hibernate.ddl-auto=update
    ```

4. **Executar o Backend com Spring Boot 🚀:**
    Depois de configurar o banco de dados, você pode rodar o backend com o Maven ou Spring Boot:
    Com o Maven:
    ```bash
    ./mvnw spring-boot:run
    ```
    Ou diretamente com o Spring Boot:
    ```bash
    ./mvnw spring-boot:run
    ```
    Agora, a API estará disponível em: `http://localhost:8080`

## Passo 2: Configurar o Frontend
1. **Navegue até a pasta do frontend:**
   ```bash
    cd ../frontend

2. **Instale as dependências:**
   ```bash
    npm install

3. **Execute o frontend:**

   ```bash
   ng serve
O frontend estará disponível em `http://localhost:4200`.

## Passo 3: Testar a Aplicação
1. Acesse `http://localhost:4200` no navegador.
2. Use a tela de login para se autenticar ou a tela de cadastro para criar um novo usuário.
3. Verifique se os dados estão sendo salvos no banco de dados MySQL.


## Estrutura do Projeto 📂

- **Backend (Spring Boot)**
    ```
    src/main/java/com/example/accesselitebackend/:
    ├── model/: Entidades do banco de dados (ex: User).
    ├── repository/: Repositórios JPA (ex: UserRepository).
    └── controller/: Controladores REST (ex: UserController).
    ```
- **Frontend (Angular)**
  ```
  src/app/:
  ├── sign-in/: Componente da tela de login/cadastro.
  ├── auth/: Serviço de autenticação.
  └── assets/images/: Imagens utilizadas no projeto.
    ```

## Contribuindo 🤝

Se você quiser contribuir com o projeto, siga os seguintes passos:

1. Faça um Fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -am 'Adicionando nova feature'`).
4. Push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença 📜

Este projeto é licenciado sob a MIT License.

Se tiver qualquer dúvida ou encontrar algum problema, fique à vontade para abrir uma issue ou perguntar! 😄
