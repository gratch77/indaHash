<?php

namespace App\Service;

use App\Entity\Card;
use App\Repository\CardRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Exception\ValidationFailedException;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class CardService {
  private CardRepository $cardRepository;
  private EntityManagerInterface $entityManager;
  private ValidatorInterface $validator;
  private NotificationService $notificationService;

  public function __construct(CardRepository $cardRepository,
                              EntityManagerInterface $entityManager,
                              ValidatorInterface $validator,
                              NotificationService $notificationService) {
    $this->cardRepository = $cardRepository;
    $this->entityManager = $entityManager;
    $this->validator = $validator;
    $this->notificationService = $notificationService;
  }

  /**
   * List cards with optional sorting and pagination.
   */
  public function listCards(int $page, int $limit, ?string $sortField = null, string $sortOrder = 'ASC'): array {
    return $this->cardRepository->findCards($page, $limit, $sortField, $sortOrder);
  }

  /**
   * Add a new card to the collection.
   */
  public function addCard(array $data): Card {
    $card = new Card();
    if (isset($data['name']))
      $card->setName($data['name']);
    if (isset($data['owner']))
      $card->setOwner($data['owner']);
    if (isset($data['price']))
      $card->setPrice($data['price']);
    if (isset($data['volume']))
      $card->setVolume($data['volume']);
    if (isset($data['receivedAt']))
      $card->setReceivedAt(new \DateTime($data['receivedAt']));
    if (isset($data['collection']))
      $card->setCollection($data['collection']);
    if (isset($data['isForSale']))
      $card->setForSale($data['isForSale'] ?? false);
    if (isset($data['isForTrade']))
      $card->setForTrade($data['isForTrade'] ?? false);
    if (isset($data['influencerName']))
      $card->setInfluencerName($data['influencerName']);
    if (isset($data['imageUrl']))
      $card->setImageUrl($data['imageUrl']);
    if (isset($data['likes']))
      $card->setLikes($data['likes'] ?? 0);
    if (isset($data['ranking']))
      $card->setRanking($data['ranking'] ?? 0);

    $errors = $this->validator->validate($card);

    if (count($errors) > 0) {
      throw new ValidationFailedException($card, $errors);
    }

    $this->cardRepository->save($card);

    $this->notificationService->sendCardAddedNotification($card->getName());

    return $card;
  }

  /**
   * Get card details by ID.
   */
  public function getCard(int $id): ?Card {
    return $this->cardRepository->find($id);
  }

  /**
   * Update card details.
   */
  public function updateCard(Card $card, array $data): Card {
    if (isset($data['name'])) {
      $card->setName($data['name']);
    }
    if (isset($data['price'])) {
      $card->setPrice($data['price']);
    }
    if (isset($data['isForSale'])) {
      $card->setForSale($data['isForSale']);
    }
    if (isset($data['isForTrade'])) {
      $card->setForTrade($data['isForTrade']);
    }
// Add other fields as necessary...

    $this->cardRepository->save($card);

    return $card;
  }

  /**
   * Delete a card by ID.
   */
  public function deleteCard(Card $card): void {
    $this->cardRepository->delete($card);
  }
}
