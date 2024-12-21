<?php

namespace App\DataFixtures;

use App\Entity\Card;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CardFixtures extends Fixture {
  public function load(ObjectManager $manager): void {
    for ($i = 1; $i <= 30; $i++) {
      $card = new Card();
      $card->setName("Card #$i");
      $card->setOwner("Owner $i");
      $card->setPrice(mt_rand(10, 1000) / 10); // Random price between 1.0 and 100.0
      $card->setVolume(mt_rand(1, 100)); // Random volume between 1 and 100
      $card->setReceivedAt(new \DateTime(sprintf('-%d days', mt_rand(1, 365))));
      $card->setCollection('Collection ' . chr(65 + ($i % 26))); // Random collection A-Z
      $card->setInfluencerName("Influencer $i");
      $card->setImageUrl("https://picsum.photos/seed/".$i."/480");
      $card->setForSale((bool)mt_rand(0, 1));
      $card->setForTrade((bool)mt_rand(0, 1));
      $card->setLikes(mt_rand(0, 1000));
      $card->setRanking(mt_rand(1, 100));

      $manager->persist($card);
    }

    $manager->flush();
  }
}
