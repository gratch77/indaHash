<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/api/cards' => [
            [['_route' => 'api_cards_list', '_controller' => 'App\\Controller\\CardController::listCards'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'api_cards_create', '_controller' => 'App\\Controller\\CardController::addCard'], null, ['POST' => 0], null, false, false, null],
        ],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/api/cards/([^/]++)(?'
                    .'|(*:64)'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        64 => [
            [['_route' => 'api_cards_get', '_controller' => 'App\\Controller\\CardController::getCard'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_cards_update', '_controller' => 'App\\Controller\\CardController::updateCard'], ['id'], ['PUT' => 0], null, false, true, null],
            [['_route' => 'api_cards_delete', '_controller' => 'App\\Controller\\CardController::deleteCard'], ['id'], ['DELETE' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
