<?php

require_once __DIR__ . '/Request.php';
require_once __DIR__ . '/Response.php';

class Route {
    private static $routes = [];

    public static function get(string $path, callable $handler): void {
        self::$routes["GET"][rtrim($path, "/")] = $handler;
    }   

    public static function post(string $path, callable $handler): void {
        self::$routes["POST"][rtrim($path, "/")] = $handler;
    }

    public static function dispatch(Request $request) {
        $method = $request->method;
        $path = $request->path;

        if(!isset(self::$routes[$method][$path])) {
            Response::json(404, "Rota não encontrada");
        }

        $handler = self::$routes[$method][$path];
        $handler($request);
    }
}