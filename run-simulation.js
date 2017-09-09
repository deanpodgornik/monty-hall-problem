var simulation = require('./simulation.js');

var victory_count_without_change = 0;
var victory_count_with_change = 0;
var experiments_count = 0;

for (var i = 0; i < 1000; i++) {
	var selected_door = simulation.random_number_generator();
	var reward_door = simulation.random_number_generator();
	var alternative_door = simulation.get_alternative_number(selected_door, reward_door);	

	if(selected_door == reward_door)
		victory_count_without_change++;
	if(alternative_door == reward_door)
		victory_count_with_change++;
	experiments_count++;

	simulation.print_experiment_result(selected_door, reward_door, alternative_door);
};

var percentage_without_change = victory_count_without_change / experiments_count;
var percentage_with_change = victory_count_with_change / experiments_count;

console.log("percentage_without_change:" + percentage_without_change);
console.log("percentage_with_change:" + percentage_with_change);