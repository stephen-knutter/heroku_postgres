
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('taco_toppings').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('taco_toppings').insert({
          name: 'hot sauce',
          price_in_cents: 50
        }),
        knex('taco_toppings').insert({
          name: 'jalapeńoes',
          price_in_cents: 50
        }),
        knex('taco_toppings').insert({
          name: 'gaucamole',
          price_in_cents: 250
        })
      ]);
    });
};
