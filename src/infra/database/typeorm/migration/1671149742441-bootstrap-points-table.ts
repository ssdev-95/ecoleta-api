import { MigrationInterface, QueryRunner } from 'typeorm';

export class bootstrapPointsTable1671149742441 implements MigrationInterface {
    name = 'bootstrapPointsTable1671149742441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "points" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "whatsapp" integer NOT NULL, "street" varchar NOT NULL, "city" varchar NOT NULL, "uf" varchar NOT NULL, "coords" varchar NOT NULL, "picture" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "points"`);
    }

}
