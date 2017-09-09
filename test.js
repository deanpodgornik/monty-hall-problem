var app = require('./simulation.js');

var contains = function(input, search){
	for (var i = 0; i < input.length; i++) {
		if(input[i]==search)
			return true;
	};
	return false;
}

var assert = require('assert');
describe('Array', function() {
  describe('Test random number retrieval', function() {
    it('check if there are all the possible values', function() {
		var results = [];
		for(var i=0; i<100; i++){
			results.push(app.random_number_generator());
		}
		assert.equal(true, contains(results, 1));
		assert.equal(true, contains(results, 2));
		assert.equal(true, contains(results, 3));		
    });
  });

  describe('Test alternative number retrieval', function() {
    it('check if there are randomness in this process', function() {
    	var results = [];
		for(var i=0; i<100; i++){
			results.push(app.get_alternative_number(1,1));
		}
		assert.equal(false, contains(results, 1));
		assert.equal(true, contains(results, 2));
		assert.equal(true, contains(results, 3));
    });
  });
});