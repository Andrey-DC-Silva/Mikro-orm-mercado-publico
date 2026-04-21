import { Migration } from '@mikro-orm/migrations';

export class Migration20260421044624_rename_usuario_table extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "user" rename to "usuarios";`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "user" rename to "usuarios";`);
  }

}
