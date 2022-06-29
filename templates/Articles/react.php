<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Article[]|\Cake\Collection\CollectionInterface $articles
 */
?>
<?php $this->extend('../layout/TwitterBootstrap/dashboard'); ?>

<?= $this->Html->scriptBlock(sprintf(
    'var csrfToken = %s;',
    json_encode($this->request->getAttribute('csrfToken'))
)); ?>

<div class="row">
    <div class="col-3">
        <nav class="large-3 medium-4 columns" id="actions-sidebar">
            <ul class="nav flex-column">
                <li class="nav-item"><?= __('Actions') ?></li>
                <?= $this->element('reactLink'); ?>
                <li class="nav-item"><?= $this->Html->link(__('New Article'), ['action' => 'add'], ['class' => 'nav-link']) ?></li>
            </ul>
        </nav>
    </div>
    <div class="col-9">
        <?php $this->Html->css($css, [
            'block' => true
        ]); ?>
        <!-- this is where the react page mounts -->
        <div id="root" baseUrl="<?= $this->Url->build('/articles'); ?>"></div>
        <?= $this->Html->script($js); ?>
    </div>
</div>