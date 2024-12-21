<?php

namespace App\Security;

use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiKeyAuthenticator
{
  private string $apiKey;

  public function __construct(string $apiKey)
  {
    $this->apiKey = $apiKey;
  }

  public function onKernelRequest(RequestEvent $event): void
  {
    $request = $event->getRequest();
    $method = $request->getMethod();
    $authHeader = $request->headers->get('X-API-KEY');

    // Check if the request modifies data and requires authentication
    if (in_array($method, ['POST', 'PUT', 'DELETE']) && $authHeader !== $this->apiKey) {
      $response = new JsonResponse(['error' => 'Unauthorized'], JsonResponse::HTTP_UNAUTHORIZED);
      $event->setResponse($response);
    }
  }
}
