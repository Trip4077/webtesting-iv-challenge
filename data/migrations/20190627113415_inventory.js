
exports.up = function(knex) {
    return knex.schema.createTable('inventory', tbl => {
        tbl.increments();

        tbl.string('make', 128).notNullable();
        tbl.int('year').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('inventory');
};
