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
            <ul class="side-nav">
                <li class="heading"><?= __('Actions') ?></li>
                <li><?= $this->Form->postLink(
                        __('Delete'),
                        ['action' => 'delete', $article->id],
                        ['confirm' => __('Are you sure you want to delete # {0}?', $article->id)]
                    )
                    ?></li>
                <?= $this->element('reactLink'); ?>
                <li><?= $this->Html->link(__('List Articles'), ['action' => 'index']) ?></li>

            </ul>
        </nav>
    </div>
    <div class="col-9">
        <div class="articles form large-9 medium-8 columns content">
            <?= $this->Form->create($article) ?>
            <fieldset>
                <legend><?= __('Edit Article') ?></legend>
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