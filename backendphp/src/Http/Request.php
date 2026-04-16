<?php

class Request {
    public string $method;
    public string $path;
    public array $body;

    public function __construct() {
        $this->method = $_SERVER['REQUEST_METHOD'];
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

        $this->path = rtrim($uri, "/");

        $rawBody = file_get_contents("php://input");
        $decode = json_decode($rawBody, true);

        $this->body = is_array($decode) ? $decode : [];
    }
}