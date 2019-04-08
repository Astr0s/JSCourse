function checkSpam(str) {
	if ((str.toLowerCase()).indexOf("xxx") > -1 || (str.toLowerCase()).indexOf("viagra") > -1) {
		return true;
	}
	else {
		return false;
	}
};

alert(checkSpam("innocent rabbit"));