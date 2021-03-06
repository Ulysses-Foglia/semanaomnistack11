
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); //primary key autoincrement

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
    
        table.string('ong_id').notNullable(); //Relacionamento com a tabela 'ongs'

        table.foreign('ong_id').references('id').inTable('ongs'); //Relação
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
