<?php

namespace App\EventListener;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\Validator\Exception\ValidationFailedException;

class ExceptionListener
{
  private LoggerInterface $logger;

  public function __construct(LoggerInterface $logger)
  {
    $this->logger = $logger;
  }

  public function onKernelException(ExceptionEvent $event): void
  {
    $exception = $event->getThrowable();

    // Default message.
    $statusCode = 500;
    $message = 'An unexpected error occurred.';

    if ($exception instanceof ValidationFailedException) {
      $errors = [];
      foreach ($exception->getViolations() as $violation) {
        $errors[] = [
          'field' => $violation->getPropertyPath(),
          'message' => $violation->getMessage(),
        ];
      }

      $response = new JsonResponse(
        ['error' => 'Validation failed', 'details' => $errors],
        JsonResponse::HTTP_BAD_REQUEST
      );
      $event->setResponse($response);

      return;
    }

    if ($exception instanceof HttpExceptionInterface) {
      $statusCode = $exception->getStatusCode();
      $message = $exception->getMessage();
    }

    $this->logger->error($exception->getMessage(), ['exception' => $exception]);

    $response = new JsonResponse(
      [
        'error' => [
          'message' => $message,
          'type' => (new \ReflectionClass($exception))->getShortName(),
          'status' => $statusCode,
        ],
      ],
      $statusCode
    );

    $event->setResponse($response);
  }
}
