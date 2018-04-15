const Task = function(difficultyLevel, urgencyLevel, reward, completionStatus){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completionStatus = false;
}

Task.prototype.markAsCompleted = function(){
  this.completionStatus = true;
}

module.exports = Task;
