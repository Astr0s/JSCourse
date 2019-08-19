function truncate(str, maxlength) {
	if (str.length > maxlength) {
		let result = str.substr(0, 20) + "...";
		return result
	}
	else {
		return str
	}
};

alert(truncate("Всем привет!", 20));