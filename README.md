# CakePHP with a React Page Embedded in a View

You need composer and node

Clone this repo to a (preferably Apache) web server

```
git clone https://github.com/jmcd73/cakephp-react-backend.git
cd cakephp-react-backend
composer install #  installs CakePHP, DebugKit
git submodule init
git submodule update
cd cakephp-react-frontend
yarn install
yarn start
```

Create a database (DB name is "cake") using the config/schema/cake.sql file

```
mysql -uroot -p <yourpassword> < config/schema/cake.sql
```

Copy config/app.default.php to config/app.php and change the DB connection details to suit the above database

src/Template/Articles/react.ctp contains the code to mount the react SPA (Single Page Application)

View the react() function block in src/Controller/ArticlesController.php to see how the react js and css is loaded from webroot/react/asset-manifest.json

For allowing fetch() to have access to the CakePHP endpoints see changes in 

Cake File | Change |
---------|----------|
config/routes.php | Added resource route and json extension |
src/Middleware/HttpOptionsMiddleware.php | Middleware to respond to OPTIONS and allow CORS
src/Application.php | Place middleware is hooked into cake |

The CsrfProtectionMiddleware has been switched off because I couldn't get it working so I have commented it out in `src/Application.php`

```
/*
 ->add(new CsrfProtectionMiddleware([
                'httpOnly' => true
            ]));
*/
```