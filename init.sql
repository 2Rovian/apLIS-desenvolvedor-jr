CREATE DATABASE IF NOT EXISTS aplis_db;
USE aplis_db;

CREATE TABLE IF NOT EXISTS tb_medicos (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    CRM VARCHAR(20) NOT NULL,
    UFCRM VARCHAR(2) NOT NULL
);

INSERT INTO tb_medicos (id, nome, CRM, UFCRM) VALUES
(1, 'Lucas da Silva', '123456', 'CE'),
(2, 'Francisco Pereira', '876543', 'CE'),
(3, 'Maria Oliveira', '456789', 'SP'),
(4, 'Ana Souza', '998877', 'RJ'),
(5, 'Carlos Mendes', '112233', 'MG');


CREATE TABLE IF NOT EXISTS tb_pacientes (
    id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    dataNascimento DATE NULL,
    carteirinha VARCHAR(50) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE
);

INSERT INTO tb_pacientes (id, nome, dataNascimento, carteirinha, cpf) VALUES
(1, 'Pedro Henrique', '2001-05-10', 'CAR123456', '12345678909'),
(2, 'Fernanda Lima', '1998-09-22', 'CAR876543', '12345678901'),
(3, 'Lucas Almeida', '2005-01-15', 'CAR111222', '98765432100'),
(4, 'Juliana Costa', '1992-12-30', 'CAR333444', '55544433322'),
(5, 'Rafael Souza', '2001-12-25', 'CAR555666', '11122233344');