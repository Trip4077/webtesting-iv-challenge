
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        { id: 1, make: 'chevy', year: 2010 },
        { id: 2, make: 'toyota', year: 2013 },
      ]);
    });
};
