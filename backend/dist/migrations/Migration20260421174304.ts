import { Migration } from '@mikro-orm/migrations';

export class Migration20260421174304 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "itemPedidos" alter column "preco_unitario" type numeric(10,2) using ("preco_unitario"::numeric(10,2));`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "itemPedidos" alter column "preco_unitario" type int4 using ("preco_unitario"::int4);`);
  }

}
