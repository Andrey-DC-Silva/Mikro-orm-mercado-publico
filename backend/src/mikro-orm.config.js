import { defineConfig } from '@mikro-orm/postgresql';
import path from 'path';

export default defineConfig({
  dbName: 'exemplo_mikro',
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,

  //entities: [path.join(__dirname, 'entities/**/*.js')],

  entities: ['dist/entities'],
  entitiesTs: ['src/entities'],

  migrations: {
    path: path.join(__dirname, 'migrations'),
  },

  debug: true,
});