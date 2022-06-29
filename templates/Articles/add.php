<?php

/**
 * @var \App\View\AppView $this
 * @var \App\Model\Entity\Article $article
 */
?>
<?php $this->extend('../layout/TwitterBootstrap/dashboard'); ?>

<div class="row">
    <div class="col-3">
        <nav class="large-3 medium-4 columns" id="actions-sidebar">
            <ul class="nav flex-column">
                <li class="nav-item"><?= __('Actions') ?></li>
                <?= $this->element('reactLink'); ?>
            </ul>
        </nav>
    </div>
    <div class="col">
        <div class="articles form large-9 medium-8 columns content">
            <?= $this->Form->create($article) ?>
            <fieldset>
                <legend><?= __('Add Article') ?></legend>
                <?php
                echo $this->Form->control('title');
                echo $this->Form->control('body');
                ?>
            </fieldset>
            <?= $this->Form->button(__('Submit')) ?>
            <?= $this->Form->end() ?>
        </div>

    </div>
</div>