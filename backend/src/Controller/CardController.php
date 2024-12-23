<?php

namespace App\Controller;

use App\Service\CardService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CardController extends AbstractController {
  private CardService $cardService;

  public function __construct(CardService $cardService) {
    $this->cardService = $cardService;
  }

  public function listCards(Request $request): JsonResponse {
    $page = $request->query->getInt('page', 1);
    $limit = $request->query->getInt('limit', 10);
    $sortField = $request->query->get('sortField', null);
    $sortOrder = $request->query->get('sortOrder', 'ASC');
    $onlyMine = $request->query->get('onlyMine', 'false');
    $onlyMine = $onlyMine === 'true';

    $cardsData = $this->cardService->listCards($page, $limit, $sortField, $sortOrder, $onlyMine);

    return $this->json($cardsData);
  }

  public function addCard(Request $request): JsonResponse {
    $data = json_decode($request->getContent(), true);
    $card = $this->cardService->addCard($data);

    return $this->json($card, Response::HTTP_CREATED);
  }

  public function getCard(int $id): JsonResponse {
    $card = $this->cardService->getCard($id);

    if (!$card) {
      return $this->json(['error' => 'Card not found'], Response::HTTP_NOT_FOUND);
    }

    return $this->json($card);
  }

  public function updateCard(int $id, Request $request): JsonResponse {
    $card = $this->cardService->getCard($id);

    if (!$card) {
      return $this->json(['error' => 'Card not found'], Response::HTTP_NOT_FOUND);
    }

    $data = json_decode($request->getContent(), true);
    $updatedCard = $this->cardService->updateCard($card, $data);

    return $this->json($updatedCard);
  }

  public function deleteCard(int $id): JsonResponse {
    $card = $this->cardService->getCard($id);

    if (!$card) {
      return $this->json(['error' => 'Card not found'], Response::HTTP_NOT_FOUND);
    }

    $this->cardService->deleteCard($card);

    return $this->json(null, Response::HTTP_NO_CONTENT);
  }
}
