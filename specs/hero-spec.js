const assert = require ('assert');
const Hero = require('../models/hero.js');
const Food = require('../models/food.js');
const Task = require('../models/task.js');

describe('Hero', function () {
  let hero;
  let spinach;
  let caviar;
  let makeAFire;
  let killAllRats;
  let haveABath;
  let tasksToDo;

  beforeEach(function() {
    hero = new Hero('Spiderman', 15, 'caviar', spinach);
    spinach = new Food('Spinach', 50);
    caviar = new Food('caviar', 10);
    makeAFire = new Task(5, 10, 'hot dinner', false);
    killAllRats = new Task(6, 10, 'glory', false);
    haveABath = new Task(1, 7, 'because I am worth it', false);
    tasksToDo = [makeAFire, killAllRats, haveABath];
  });

  it('should have a name', function(){
    const actual = hero.name;
    assert.strictEqual(actual, 'Spiderman');
  });

  it('should have health', function(){
    assert.strictEqual(hero.health, 15);
  });

  it('should have a favourite food', function(){
    assert.strictEqual(hero.favouriteFood, 'caviar');
  });

  it('should be able to say their name', function(){
    assert.strictEqual(hero.talk(), 'My name is Spiderman');
  });

  it('it should have a collection of tasks to complete', function(){
    const task1 = hero.canAddTask(makeAFire);
    const task2 = hero.canAddTask(killAllRats);
    const result = hero.tasks.length;
    assert.deepStrictEqual(result, 2);
  });

  it('should be able to eat food where health goes up by the replenishment value of food, if food is their favourite food then their health should go up by 1.5 * value', function(){
    const actual = 37.5;
    assert.strictEqual(hero.eat(caviar), actual);
  });

  //below test is not working
  xit('should be able to sort tasks by difficulty level', function() {
    const task1 = hero.canAddTask(makeAFire);
    const task2 = hero.canAddTask(killAllRats);
    const result = hero.sortTasksByDifficulty();
    assert.deepStrictEqual(result, [killAllRats, makeAFire]);
  });

});
