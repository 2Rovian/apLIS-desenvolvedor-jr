<?php

class Connection {
    public static function get(): PDO {
        try {
            $pdo = new PDO(
                "mysql:host=mysql;dbname=aplis_db;charset=utf8mb4",
                "root",
                "root"
            );

            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


            return $pdo;
        } catch (PDOException $e) {
            die("Erro ao conectar no banco: " . $e->getMessage());
        }
    }
}