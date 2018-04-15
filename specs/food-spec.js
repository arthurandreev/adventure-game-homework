const assert = require('assert');
const Food = require('../models/food.js');

describe('Food', function (){
  let food;

  beforeEach(function(){
    food = new Food('Burrito', 50);
  });

  it('should have a name', function(){
    assert.strictEqual(food.name, 'Burrito');
  });

  it('should have a replenishment value', function(){
    assert.strictEqual(food.replenishmentValue, 50);
  });

});
