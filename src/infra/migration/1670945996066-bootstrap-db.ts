import { MigrationInterface, QueryRunner } from "typeorm";

export class bootstrapDb1670945996066 implements MigrationInterface {
    name = 'bootstrapDb1670945996066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "points" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "whatsapp" integer NOT NULL, "street" integer NOT NULL, "city" varchar NOT NULL, "uf" varchar NOT NULL, "coords" varchar NOT NULL, "picture" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "points"`);
    }

}
