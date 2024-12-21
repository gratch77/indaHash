<?php

namespace App\Service;

use Psr\Log\LoggerInterface;

class NotificationService {
  private LoggerInterface $logger;

  public function __construct(LoggerInterface $logger) {
    $this->logger = $logger;
  }

  public function sendCardAddedNotification(string $cardName): void {
    $this->logger->info('Sending email notification for new card addition.', [
      'to' => 'fake@example.com',
      'subject' => 'New Card Added',
      'body' => sprintf('A new card "%s" has been added to the system.', $cardName),
    ]);
  }
}
