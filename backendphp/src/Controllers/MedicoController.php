<?php

require_once __DIR__ . "/../Database/Connection.php";
require_once __DIR__ . "/../Http/Response.php";

class MedicoController
{
    public static function getMedicos()
    {
        $pdo = Connection::get();
        $stmt = $pdo->query("SELECT id, nome, CRM, UFCRM FROM tb_medicos");

        $medicosArray = $stmt->fetchAll(PDO::FETCH_ASSOC);

        Response::json(200, "success", $medicosArray);
    }

    public static function registerMedico(array $body) {
        $id = $body["id"] ?? null;
        $nome = $body["nome"] ?? null;
        $crm = $body["CRM"] ?? null;
        $ufcrm = $body["UFCRM"] ?? null;

        if(!$id || !$nome || !$crm || !$ufcrm) {
            Response::json(400, "São obrigatórios os campos: id, nome, CRM, UFCRM");
        }

        $pdo = Connection::get();
        $stmt = $pdo->prepare("INSERT INTO tb_medicos (id, nome, CRM, UFCRM) VALUES (?, ?, ?, ?");

        $medicoRegistrado = [
            "id" => $id,
            "nome" => $nome,
            "CRM" => $crm,
            "UFCRM" => $ufcrm
        ];

        $stmt->execute([$id, $nome, $crm, $ufcrm]);

        Response::json(201, "Médico registrado com sucesso", $medicoRegistrado);
    } 
}