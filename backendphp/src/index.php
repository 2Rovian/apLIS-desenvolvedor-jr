<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

require_once __DIR__ . "/Http/Route.php";
require_once __DIR__ . "/Controllers/MedicoController.php";

$request = new Request();

Route::get("/api/v1/medicos", function(){
    MedicoController::getMedicos();
});

Route::post("/api/v1/medicos", function($req){
    MedicoController::registerMedico($req->body);
});

route::dispatch($request);