import { MigrationInterface, QueryRunner } from "typeorm";

export class alterPointsTableFields1671891171936 implements MigrationInterface {
    name = 'alterPointsTableFields1671891171936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_points" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "whatsapp" integer NOT NULL, "street" varchar NOT NULL, "city" varchar NOT NULL, "uf" varchar NOT NULL, "coords" varchar NOT NULL, "picture" varchar NOT NULL, "categories" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_points"("id", "name", "email", "whatsapp", "street", "city", "uf", "coords", "picture") SELECT "id", "name", "email", "whatsapp", "street", "city", "uf", "coords", "picture" FROM "points"`);
        await queryRunner.query(`DROP TABLE "points"`);
        await queryRunner.query(`ALTER TABLE "temporary_points" RENAME TO "points"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "points" RENAME TO "temporary_points"`);
        await queryRunner.query(`CREATE TABLE "points" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "whatsapp" integer NOT NULL, "street" varchar NOT NULL, "city" varchar NOT NULL, "uf" varchar NOT NULL, "coords" varchar NOT NULL, "picture" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "points"("id", "name", "email", "whatsapp", "street", "city", "uf", "coords", "picture") SELECT "id", "name", "email", "whatsapp", "street", "city", "uf", "coords", "picture" FROM "temporary_points"`);
        await queryRunner.query(`DROP TABLE "temporary_points"`);
    }

}
