<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerIGGxs5z\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerIGGxs5z/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerIGGxs5z.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerIGGxs5z\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerIGGxs5z\App_KernelDevDebugContainer([
    'container.build_hash' => 'IGGxs5z',
    'container.build_id' => '1edcec8d',
    'container.build_time' => 1734745599,
    'container.runtime_mode' => \in_array(\PHP_SAPI, ['cli', 'phpdbg', 'embed'], true) ? 'web=0' : 'web=1',
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerIGGxs5z');
