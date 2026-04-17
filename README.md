# 🏥 apLIS - Fullstack Challenge

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

Este repositório contém a implementação do teste prático para **Desenvolvedor Júnior**. O projeto consiste em um sistema de cadastro e listagem de pacientes e médicos com arquitetura de micro-serviços, integrando diferentes tecnologias de backend para finalidades específicas.

---

## 📸 Preview

### Gestão de Médicos (Backend PHP)
<img width="100%" alt="Tela Médicos" src="https://github.com/user-attachments/assets/47cffaf1-2c0a-4d14-a9fc-2cd07911946f" />

### Gestão de Pacientes (Backend NodeJS)
<img width="100%" alt="Tela Pacientes" src="https://github.com/user-attachments/assets/dbe6fb86-44e7-47ed-8281-8bd6b0af68bc" />

---

## 🛠 Estrutura do Ecossistema

O projeto utiliza uma estratégia de **Monorepo**, facilitando a orquestração via Docker:

* **/app**: Frontend moderno construído com React, Vite e TailwindCSS.
* **/backendjs**: API REST em Node.js (Express) responsável pelo módulo de **Pacientes**.
* **/backendphp**: API REST em PHP Vanilla (PDO) responsável pelo módulo de **Médicos**.
* **init.sql**: Schema do banco de dados para provisionamento automático do MySQL.

---

## 🔌 API Endpoints

### 🩺 Módulo: Médicos (PHP)
| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/v1/medicos` | Lista todos os registros |
| `POST` | `/api/v1/medicos` | Cadastra um novo médico |
| `PUT` | `/api/v1/medicos` | Atualiza dados (JSON body) |
| `DELETE` | `/api/v1/medicos` | Remove médico (JSON body c/ ID) |

### 👤 Módulo: Pacientes (Node.js)
| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/v1/pacientes` | Lista todos os registros |
| `GET` | `/api/v1/pacientes/:id` | Busca detalhada por ID |
| `POST` | `/api/v1/pacientes` | Cadastra um novo paciente |
| `PUT` | `/api/v1/pacientes/:id` | Atualiza dados via URL param |
| `DELETE` | `/api/v1/pacientes/:id` | Remove paciente por ID |

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
Certifique-se de ter instalado:
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

### Instalação e Execução
1. Clone e entre no repositório:
   ```bash
   git clone https://github.com/seu-usuario/apLIS-desenvolvedor-jr.git && cd apLIS-desenvolvedor-jr
    ```
2.  Suba os containers:
    ```bash
    docker compose up --build
    ```
3. Acesse as aplicações:
    - Frontend (React): http://localhost:5173
    - API Node.js (Pacientes): http://localhost:3000
    - API PHP (Médicos): http://localhost:8080
      
### 🔌 Portas e Serviços
| Serviço	| Porta | 	
| :--- | :--- |
| Frontend (React + Vite) |	5173|	
| Backend Node.js |	3000 |
| Backend PHP |	8080 |
| MySQL Database | 3307 |	

### 🛑 Encerrando

Para encerrar todos os serviços e remover os containers, utilize:
```bash
docker compose down
```
