<?php

namespace App\Middleware;

class HttpOptionsMiddleware
{
    public function __invoke($request, $response, $next)
    {

        $response = $response->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        ->withHeader('Access-Control-Allow-Credentials', 'true');


        if ($request->getMethod() == 'OPTIONS') {

            $method = $request->getHeader('Access-Control-Request-Method');
            $headers = $request->getHeader('Access-Control-Request-Headers');
            $allowed = empty($method) ? 'GET, POST, PUT, DELETE' : $method;

            $response = $response
                ->withHeader('Access-Control-Allow-Headers', $headers)
                ->withHeader('Access-Control-Allow-Methods', $allowed)
                ->withHeader('Access-Control-Allow-Credentials', 'true')
                ->withHeader('Access-Control-Max-Age', '86400');

            return $response;
        }

        return $next($request, $response);
    }
}
