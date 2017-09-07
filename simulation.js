function random_number_generator(except){
	if(except){
		var tmpResult = random_number_generator();
		while (tmpResult = except){
			tmpResult = random_number_generator();
		} 
		return tmpResult;
	}else{
		return Math.floor((Math.random() * 3) + 1);
	}	
}

function get_alternative_number(selected_door, reward_door){
	if(selected_door == reward_door){
		available_numbers = [];
		for(var i=1; i<=3; i++){
			if(i != selected_door)
				available_numbers.push(i);
		}
		var selected_random_index = Math.floor((Math.random() * 2) );
		return available_numbers[selected_random_index];
	}else{
		return reward_door;
	}	
}

function print_experiment_result(selected_door, reward_door, alternative_door){
	console.log("selected_doo:" + selected_door);
	console.log("reward_door:" + reward_door);
	console.log("alternative_door:" + alternative_door);
	console.log("------------");
}

var victory_count_without_change = 0;
var victory_count_with_change = 0;
var experiments_count = 0;

for (var i = 0; i < 1000; i++) {
	var selected_door = random_number_generator();
	var reward_door = random_number_generator();
	var alternative_door = get_alternative_number(selected_door, reward_door);	

	if(selected_door == reward_door)
		victory_count_without_change++;
	if(alternative_door == reward_door)
		victory_count_with_change++;
	experiments_count++;

	print_experiment_result(selected_door, reward_door, alternative_door);
};

var percentage_without_change = victory_count_without_change / experiments_count;
var percentage_with_change = victory_count_with_change / experiments_count;

console.log("percentage_without_change:" + percentage_without_change);
console.log("percentage_with_change:" + percentage_with_change);