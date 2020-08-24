import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    // Criação de conexão aluno / professor
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    //Quando houve a conexão
    table.timestamp("created_at").defaultTo("now()").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}
