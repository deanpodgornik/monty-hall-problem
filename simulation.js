/**
 * This function return a random door index.
 * except: is the door index that sohuld not be returned as a result (the case when we are searching for an alternaqtive door index)
 */
exports.random_number_generator = function(except){
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

/**
 * Return the alternative door index
 * selected_door: index of the first selected door
 * reward_door: index of the door with the reward
 */
exports.get_alternative_number = function(selected_door, reward_door){
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

/**
 * Print the details of the current experiment
 * selected_door: index of the selected door
 * reward_door: index of the door with the reward
 * alternative_door: index of the door, which was given as an alternative to the first selected door
 */
exports.print_experiment_result = function (selected_door, reward_door, alternative_door){
	console.log("selected_doo:" + selected_door);
	console.log("reward_door:" + reward_door);
	console.log("alternative_door:" + alternative_door);
	console.log("------------");
}