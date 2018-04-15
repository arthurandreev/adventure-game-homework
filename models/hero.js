const Hero = function(name, health, favouriteFood, food, tasks) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.food = food;
  this.tasks = tasks;
};

Hero.prototype.talk = function(){
  return `My name is ${this.name}`;
};

Hero.prototype.eat = function(food){
  let healthCount;
  if (food.name === this.favouriteFood){
    healthCount = this.health = (this.health + food.replenishmentValue) * 1.5;
  } else {
  healthCount = this.health += food.replenishmentValue;
};
return healthCount;
};

Hero.prototype.sortTasksByCriteria = function(criteria){
  let unsortedArray = this.tasks;
  let sortedArray = unsortedArray.sort(function(task1, task2){
    task1.criteria - task2.criteria;
  });
    return sortedArray;
  };

module.exports = Hero;
