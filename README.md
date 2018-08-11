# CakePHP with a React Page Embedded in a View

Clone this repo to a (preferably Apache) web server

Run composer install in the repo to install CakePHP, DebugKit

Create a database (DB name is "cake") using the config/schema/cake.sql file

```
mysql -uroot -p <yourpassword> < config/schema/cake.sql

```


src/Template/Articles/react.ctp contains the code to mount the react SPA (Single Page Application)


View the react() function block in src/Controller/ArticlesController.php to see how the react js and css is loaded from webroot/react/asset-manifest.json

For allowing fetch() to have access to the CakePHP endpoints see changes in 

config/routes.php
src/Middleware/HttpOptionsMiddleware.php
src/Application.php

The CsrfProtectionMiddleware has been switched off because I couldn't get it working

```
/*
 ->add(new CsrfProtectionMiddleware([
                'httpOnly' => true
            ]));
            */
```