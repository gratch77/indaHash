<?php

namespace App\Repository;

use App\Entity\Card;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Card>
 */
class CardRepository extends ServiceEntityRepository {
  public function __construct(ManagerRegistry $registry) {
    parent::__construct($registry, Card::class);
  }

  public function save(Card $card, bool $flush = true): void {
    $entityManager = $this->getEntityManager();

    $entityManager->persist($card);

    if ($flush) {
      $entityManager->flush();
    }
  }

  public function delete(Card $card, bool $flush = true): void {
    $entityManager = $this->getEntityManager();

    $entityManager->remove($card);

    if ($flush) {
      $entityManager->flush();
    }
  }

  /**
   * Find cards with optional sorting and pagination.
   *
   * @param int $page Current page
   * @param int $limit Number of items per page
   * @param string|null $sortField Field to sort by
   * @param string $sortOrder Order direction ('ASC' or 'DESC')
   * @return array
   */
  public function findCards(int $page = 1, int $limit = 10, ?string $sortField = null, string $sortOrder = 'ASC'): array {
    $qb = $this->createQueryBuilder('c');

    if ($sortField) {
      $qb->orderBy('c.' . $sortField, $sortOrder);
    }

    $qb->setFirstResult(($page - 1) * $limit)
      ->setMaxResults($limit);

    return $qb->getQuery()->getResult();
  }

  /**
   * Find cards by collection name.
   *
   * @param string $collectionName
   * @return Card[]
   */
  public function findByCollection(string $collectionName): array {
    return $this->createQueryBuilder('c')
      ->where('c.collection = :collection')
      ->setParameter('collection', $collectionName)
      ->getQuery()
      ->getResult();
  }

  /**
   * Find cards available for sale.
   *
   * @return Card[]
   */
  public function findForSale(): array {
    return $this->createQueryBuilder('c')
      ->where('c.isForSale = true')
      ->getQuery()
      ->getResult();
  }




  //    /**
  //     * @return Card[] Returns an array of Card objects
  //     */
  //    public function findByExampleField($value): array
  //    {
  //        return $this->createQueryBuilder('c')
  //            ->andWhere('c.exampleField = :val')
  //            ->setParameter('val', $value)
  //            ->orderBy('c.id', 'ASC')
  //            ->setMaxResults(10)
  //            ->getQuery()
  //            ->getResult()
  //        ;
  //    }

  //    public function findOneBySomeField($value): ?Card
  //    {
  //        return $this->createQueryBuilder('c')
  //            ->andWhere('c.exampleField = :val')
  //            ->setParameter('val', $value)
  //            ->getQuery()
  //            ->getOneOrNullResult()
  //        ;
  //    }
}
