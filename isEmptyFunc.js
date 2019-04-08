let schedule = {
	
};

schedule['8:30'] = 'Подъем';


function isEmpty(obj) {
	for (schedule in obj) {
			return false;
	}
	return true;
};

alert(isEmpty(schedule));