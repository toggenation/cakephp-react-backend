<?php

namespace App\Middleware;

class HttpOptionsMiddleware
{
    use \Cake\Log\LogTrait;

    public function __invoke($request, $response, $next)
    {
        $myOrigins = ['http://localhost:3000', 'http://10.19.73.29:3000', 'http://localhost'];

        $httpOrigin = $request->getHeaderLine('HTTP_ORIGIN');
        // dd($httpOrigin);

         $this->log($request->getHeaderLine('HTTP_ORIGIN'));

        if (in_array($httpOrigin, $myOrigins)) {
            $response = $response->withHeader('Access-Control-Allow-Origin', $httpOrigin);
        }

        $response = $response->withHeader('Access-Control-Allow-Credentials', 'true');

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
