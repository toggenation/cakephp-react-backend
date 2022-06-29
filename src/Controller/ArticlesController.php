<?php

namespace App\Controller;

use App\Controller\AppController;
use Cake\Filesystem\File;

/**
 * Articles Controller
 *
 * @property \App\Model\Table\ArticlesTable $Articles
 *
 * @method \App\Model\Entity\Article[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class ArticlesController extends AppController
{

    public function initialize(): void
    {

        parent::initialize();

        // $this->Auth->allow(['index']);
    }

    public function react()
    {
        $filePath = WWW_ROOT . '/react/asset-manifest.json';
        $file = new File($filePath);

        $manifest = json_decode($file->read());
        $file->close();
        $css = [];
        $js = [];
        foreach ($manifest->entrypoints as $resource) {
            if (preg_match('/\.css$/', $resource) === 1) {
                $css[] = '/react/' . $resource;
            }
            if (preg_match('/\.js$/', $resource) === 1) {
                $js[] = '/react/' . $resource;
            }
        }


        $this->set(compact('css', 'js'));
    }
    /**
     * Index method
     *
     * @return \Cake\Http\Response|void
     */
    public function index()
    {
        $this->paginate = [
            'contain' => []
        ];
        $articles = $this->paginate($this->Articles);

        $this->set(compact('articles'));

        $this->viewBuilder()->setOption('serialize', ['articles']);
    }

    /**
     * View method
     *
     * @param string|null $id Article id.
     * @return \Cake\Http\Response|void
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $article = $this->Articles->get($id, [
            'contain' => []
        ]);

        $this->set('article', $article);
    }

    /**
     * Add method
     *
     * @return \Cake\Http\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {

        $article = $this->Articles->newEmptyEntity();

        $ajax = $this->request->is('ajax');
        if ($this->request->is('post')) {
            $article = $this->Articles->patchEntity($article, $this->request->getData());
            if ($this->Articles->save($article)) {
                !$ajax && $this->Flash->success(__('The article has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            !$ajax && $this->Flash->error(__('The article could not be saved. Please, try again.'));
        }
       
        $this->set(compact('article'));
        $this->viewBuilder()->setOption('serialize', 'articles');
    }

    /**
     * Edit method
     *
     * @param string|null $id Article id.
     * @return \Cake\Http\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $article = $this->Articles->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $article = $this->Articles->patchEntity($article, $this->request->getData());
            if ($this->Articles->save($article)) {
                $this->Flash->success(__('The article has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The article could not be saved. Please, try again.'));
        }
      
        $this->set(compact('article'));
    }

    /**
     * Delete method
     *
     * @param string|null $id Article id.
     * @return \Cake\Http\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {

        $ajax = $this->request->is('ajax');

        $this->request->allowMethod(['post', 'delete']);
        $article = $this->Articles->get($id);
        if ($this->Articles->delete($article)) {
            !$ajax && $this->Flash->success(__('The article has been deleted.'));
        } else {
            !$ajax && $this->Flash->error(__('The article could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
