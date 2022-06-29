<?php
declare(strict_types=1);

use Migrations\AbstractMigration;

class Articles extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     * @return void
     */
    public function change()
    {
        $this->table('articles')
        
            ->addColumn('title', 'string')
            ->addColumn('body', 'string')
            ->addTimestamps('created', 'modified')
            ->create();    
            // ->

        /**
         *   `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text,
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
         */
    }
}
