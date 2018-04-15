const Hero = function(name, health, favouriteFood, food) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.food = food;
  this.tasks = [];
};

Hero.prototype.talk = function(){
  return `My name is ${this.name}`;
};

Hero.prototype.canAddTask = function(task){
  return this.tasks.push(task);
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

Hero.prototype.sortTasksByDifficulty = function(){
  this.tasks.sort(function (task1, task2){
     if (task1.difficultyLevel > task2.difficultyLevel) {
       return -1;
     }
     if (task1.difficultyLevel < task2.difficultyLevel) {
       return 1;
     }
     return 0;
   });
 };

module.exports = Hero;
