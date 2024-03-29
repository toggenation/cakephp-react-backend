<?php

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     3.3.0
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */

namespace App;


use App\Middleware\HttpOptionsMiddleware;
use Cake\Core\Configure;
use Cake\Core\Exception\MissingPluginException;
use Cake\Error\Middleware\ErrorHandlerMiddleware;
use Cake\Http\BaseApplication;
use Cake\Http\Middleware\BodyParserMiddleware;
use Cake\Http\Middleware\CsrfProtectionMiddleware;
use Cake\Http\MiddlewareQueue;
use Cake\Routing\Middleware\AssetMiddleware;
use Cake\Routing\Middleware\RoutingMiddleware;
use Cake\Routing\RoutingApplicationInterface;

/**
 * Application setup class.
 *
 * This defines the bootstrapping logic and middleware layers you
 * want to use in your application.
 */
class Application extends BaseApplication
{
    /**
     * {@inheritDoc}
     */
    public function bootstrap(): void
    {


        // Call parent to load bootstrap from files.
        parent::bootstrap();

        if (PHP_SAPI === 'cli') {
            try {
                $this->addPlugin('Bake');
                $this->addPlugin('Migrations');
            } catch (MissingPluginException $e) {
                // Do not halt if the plugin is missing
            }
        }

        /*
         * Only try to load DebugKit in development mode
         * Debug Kit should not be installed on a production system
         */
        if (Configure::read('debug')) {
            try {

                $this->addPlugin(\DebugKit\Plugin::class);
            } catch (\Throwable $e) {
            }
        }
        $this->addPlugin('Migrations');
        $this->addPlugin('Cors');
        $this->addPlugin('BootstrapUI');
    }

    /**
     * Setup the middleware queue your application will use.
     *
     * @param \Cake\Http\MiddlewareQueue $middlewareQueue The middleware queue to setup.
     * @return \Cake\Http\MiddlewareQueue The updated middleware queue.
     */
    public function middleware(MiddlewareQueue $middlewareQueue): MiddlewareQueue
    {
        $middlewareQueue
            // Catch any exceptions in the lower layers,
            // and make an error page/response
            ->add(ErrorHandlerMiddleware::class)

            // Handle plugin/theme assets like CakePHP normally does.
            ->add(AssetMiddleware::class)

            // Add routing middleware.
            // Routes collection cache enabled by default, to disable route caching
            // pass null as cacheConfig, example: `new RoutingMiddleware($this)`
            // you might want to disable this cache in case your routing is extremely simple
            ->add(new RoutingMiddleware($this))

            ->add(new BodyParserMiddleware())
            // ->add(new HttpOptionsMiddleware($this));
            // Add csrf middleware.

            ->add(new CsrfProtectionMiddleware([
                'httponly' => true,
            ]));



        return $middlewareQueue;
    }
}
