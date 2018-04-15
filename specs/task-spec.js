const assert = require ('assert');
const Task = require('../models/task.js');

describe('Task', function(){
  let task;

  beforeEach(function(){
    task = new Task( 10, 5, 'penthouse in miami', true);
  });
    it('should have a difficulty level', function(){
      assert.strictEqual(task.difficultyLevel, 10);
    })

    it('should have an urgency level', function(){
      assert.strictEqual(task.urgencyLevel, 5);
    })

    it('should have a reward', function(){
      assert.strictEqual(task.reward, 'penthouse in miami');
    })

    it('test should be marked as incomplete to begin with', function(){
      assert.strictEqual(task.completionStatus, false);
    })

    it('should be able to mark task as completed', function(){
      task.markAsCompleted();
      assert.strictEqual(task.completionStatus, true);
    })

});
