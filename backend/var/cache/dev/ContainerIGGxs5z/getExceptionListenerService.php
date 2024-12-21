<?php

namespace ContainerIGGxs5z;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getExceptionListenerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'App\EventListener\ExceptionListener' shared autowired service.
     *
     * @return \App\EventListener\ExceptionListener
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/src/EventListener/ExceptionListener.php';

        return $container->privates['App\\EventListener\\ExceptionListener'] = new \App\EventListener\ExceptionListener(($container->privates['monolog.logger'] ?? $container->load('getMonolog_LoggerService')));
    }
}
