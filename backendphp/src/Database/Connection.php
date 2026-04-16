<?php

class Connection {
    public static function get(): PDO {
        try {
            $pdo = new PDO(
                "mysql:host=localhost;dbname=apiLIS-schema;charset=utf8mb4",
                "root",
                "password"
            );

            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


            return $pdo;
        } catch (PDOException $e) {
            die("Erro ao conectar no banco: " . $e->getMessage());
        }
    }
}