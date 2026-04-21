import { Migration } from '@mikro-orm/migrations';

export class Migration20260421142902 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "produtos" ("id" serial primary key, "nome" varchar(255) not null, "preco" int not null, "estoque" int not null);`);

    this.addSql(`create table "pedidos" ("id" serial primary key, "usuario_id" int not null, "total" int not null);`);

    this.addSql(`create table "itemPedidos" ("id" serial primary key, "pedido_id" int not null, "produto_id" int not null, "quantidade" int not null, "preco_unitario" int not null);`);

    this.addSql(`alter table "pedidos" add constraint "pedidos_usuario_id_foreign" foreign key ("usuario_id") references "usuarios" ("id") on update cascade;`);

    this.addSql(`alter table "itemPedidos" add constraint "itemPedidos_pedido_id_foreign" foreign key ("pedido_id") references "pedidos" ("id") on update cascade;`);
    this.addSql(`alter table "itemPedidos" add constraint "itemPedidos_produto_id_foreign" foreign key ("produto_id") references "produtos" ("id") on update cascade;`);

    this.addSql(`alter table "usuarios" drop constraint "user_email_unique";`);

    this.addSql(`alter table "usuarios" rename column "name" to "nome";`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "itemPedidos" drop constraint "itemPedidos_produto_id_foreign";`);

    this.addSql(`alter table "itemPedidos" drop constraint "itemPedidos_pedido_id_foreign";`);

    this.addSql(`drop table if exists "produtos" cascade;`);

    this.addSql(`drop table if exists "pedidos" cascade;`);

    this.addSql(`drop table if exists "itemPedidos" cascade;`);

    this.addSql(`alter table "usuarios" rename column "nome" to "name";`);
    this.addSql(`alter table "usuarios" add constraint "user_email_unique" unique ("email");`);
  }

}
