<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241219162338 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__card AS SELECT id, name, owner, price, volume, received_at, collection, is_for_sale, is_for_trade, influencer_name, image_url, likes, ranking FROM card');
        $this->addSql('DROP TABLE card');
        $this->addSql('CREATE TABLE card (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, owner VARCHAR(255) NOT NULL, price DOUBLE PRECISION NOT NULL, volume INTEGER NOT NULL, received_at DATETIME NOT NULL, collection VARCHAR(255) NOT NULL, is_for_sale BOOLEAN NOT NULL, is_for_trade BOOLEAN NOT NULL, influencer_name VARCHAR(255) DEFAULT NULL, image_url VARCHAR(255) DEFAULT NULL, likes INTEGER DEFAULT 0 NOT NULL, ranking INTEGER DEFAULT 0 NOT NULL)');
        $this->addSql('INSERT INTO card (id, name, owner, price, volume, received_at, collection, is_for_sale, is_for_trade, influencer_name, image_url, likes, ranking) SELECT id, name, owner, price, volume, received_at, collection, is_for_sale, is_for_trade, influencer_name, image_url, likes, ranking FROM __temp__card');
        $this->addSql('DROP TABLE __temp__card');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__card AS SELECT id, name, owner, price, volume, received_at, collection, is_for_sale, is_for_trade, influencer_name, image_url, likes, ranking FROM card');
        $this->addSql('DROP TABLE card');
        $this->addSql('CREATE TABLE card (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(255) NOT NULL, owner VARCHAR(255) NOT NULL, price DOUBLE PRECISION NOT NULL, volume INTEGER NOT NULL, received_at DATETIME NOT NULL, collection VARCHAR(255) NOT NULL, is_for_sale BOOLEAN NOT NULL, is_for_trade BOOLEAN NOT NULL, influencer_name VARCHAR(255) DEFAULT NULL, image_url VARCHAR(255) DEFAULT NULL, likes INTEGER NOT NULL, ranking INTEGER NOT NULL)');
        $this->addSql('INSERT INTO card (id, name, owner, price, volume, received_at, collection, is_for_sale, is_for_trade, influencer_name, image_url, likes, ranking) SELECT id, name, owner, price, volume, received_at, collection, is_for_sale, is_for_trade, influencer_name, image_url, likes, ranking FROM __temp__card');
        $this->addSql('DROP TABLE __temp__card');
    }
}
