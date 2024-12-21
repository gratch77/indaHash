<?php

namespace App\Entity;

use App\Repository\CardRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CardRepository::class)]
class Card {
  #[ORM\Id]
  #[ORM\GeneratedValue]
  #[ORM\Column(type: 'integer')]
  #[Groups(['card:read'])]
  private ?int $id = null;

  #[ORM\Column(type: 'string', length: 255)]
  #[Assert\NotBlank(message: 'The card name cannot be empty.')]
  #[Assert\Length(
    max: 255,
    maxMessage: 'The card name must not exceed {{ limit }} characters.'
  )]
  #[Groups(['card:read', 'card:write'])]
  private ?string $name = null;

  #[ORM\Column(type: 'string', length: 255)]
  #[Assert\NotBlank(message: 'Owner information is required.')]
  #[Assert\Length(
    max: 255,
    maxMessage: 'The owner name must not exceed {{ limit }} characters.'
  )]
  #[Groups(['card:read', 'card:write'])]
  private ?string $owner = null;

  #[ORM\Column(type: 'float')]
  #[Assert\NotBlank(message: 'The price cannot be empty.')]
  #[Assert\GreaterThanOrEqual(
    value: 0,
    message: 'The price must be greater than or equal to 0.'
  )]
  #[Groups(['card:read', 'card:write'])]
  private ?float $price = null;

  #[ORM\Column(type: 'integer')]
  #[Assert\NotBlank(message: 'The volume cannot be empty.')]
  #[Assert\GreaterThanOrEqual(
    value: 0,
    message: 'The volume must be greater than or equal to 0.'
  )]
  private ?int $volume = null;

  #[ORM\Column(type: Types::DATETIME_MUTABLE)]
  #[Assert\NotBlank(message: 'The received date is required.')]
  #[Assert\Type(
    type: \DateTime::class,
    message: 'The received date must be a valid datetime.'
  )]
  private ?\DateTimeInterface $receivedAt = null;

  #[ORM\Column(type: 'string', length: 255)]
  #[Assert\NotBlank(message: 'The collection name cannot be empty.')]
  #[Assert\Length(
    max: 255,
    maxMessage: 'The collection name must not exceed {{ limit }} characters.'
  )]
  private ?string $collection = null;

  #[ORM\Column(type: 'boolean')]
  private ?bool $isForSale = null;

  #[ORM\Column(type: 'boolean')]
  private ?bool $isForTrade = null;

  #[ORM\Column(length: 255, nullable: true)]
  #[Assert\Length(
    max: 255,
    maxMessage: 'The influencer name must not exceed {{ limit }} characters.'
  )]
  private ?string $influencerName = null;

  #[ORM\Column(length: 255, nullable: true)]
  #[Assert\Url(message: 'The image URL must be a valid URL.')]
  private ?string $imageUrl = null;

  #[ORM\Column(type: 'integer', options: ['default' => 0])]
  #[Assert\GreaterThanOrEqual(
    value: 0,
    message: 'Likes must be greater than or equal to 0.'
  )]
  private ?int $likes = null;

  #[ORM\Column(type: 'integer', options: ['default' => 0])]
  #[Assert\GreaterThanOrEqual(
    value: 0,
    message: 'Ranking must be greater than or equal to 0.'
  )]
  private ?int $ranking = null;

  public function getId(): ?int {
    return $this->id;
  }

  public function getName(): ?string {
    return $this->name;
  }

  public function setName(string $name): static {
    $this->name = $name;

    return $this;
  }

  public function getOwner(): ?string {
    return $this->owner;
  }

  public function setOwner(string $owner): static {
    $this->owner = $owner;

    return $this;
  }

  public function getPrice(): ?float {
    return $this->price;
  }

  public function setPrice(float $price): static {
    $this->price = $price;

    return $this;
  }

  public function getVolume(): ?int {
    return $this->volume;
  }

  public function setVolume(int $volume): static {
    $this->volume = $volume;

    return $this;
  }

  public function getReceivedAt(): ?\DateTimeInterface {
    return $this->receivedAt;
  }

  public function setReceivedAt(\DateTimeInterface $receivedAt): static {
    $this->receivedAt = $receivedAt;

    return $this;
  }

  public function getCollection(): ?string {
    return $this->collection;
  }

  public function setCollection(string $collection): static {
    $this->collection = $collection;

    return $this;
  }

  public function isForSale(): ?bool {
    return $this->isForSale;
  }

  public function setForSale(bool $isForSale): static {
    $this->isForSale = $isForSale;

    return $this;
  }

  public function isForTrade(): ?bool {
    return $this->isForTrade;
  }

  public function setForTrade(bool $isForTrade): static {
    $this->isForTrade = $isForTrade;

    return $this;
  }

  public function getInfluencerName(): ?string {
    return $this->influencerName;
  }

  public function setInfluencerName(?string $influencerName): static {
    $this->influencerName = $influencerName;

    return $this;
  }

  public function getImageUrl(): ?string {
    return $this->imageUrl;
  }

  public function setImageUrl(?string $imageUrl): static {
    $this->imageUrl = $imageUrl;

    return $this;
  }

  public function getLikes(): ?int {
    return $this->likes;
  }

  public function setLikes(int $likes): static {
    $this->likes = $likes;

    return $this;
  }

  public function getRanking(): ?int {
    return $this->ranking;
  }

  public function setRanking(int $ranking): static {
    $this->ranking = $ranking;

    return $this;
  }

  public function __toString(): string {
    return $this->name;
  }
}
