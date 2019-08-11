//database for users
var database = [
//user credentials
	{
	username: "phil",
	passowrd: "secret"
	},
	{
	username: "Sally",
	passowrd: "123"
	},
	{
	username: "ingrid",
	passowrd: "777"
	}
];
//news feed
var newFeed = [
	{
	username: "Bobby",
	timeline: "So tired from all that leanring"
	},
	{
	username: "Sally",
	timeline: "Javascript is soo cool!"
	},
	{
	username: "Mitch",
	timeline: "Javascript is prettty cool!"
	}
];

function isUserValid(username, password) {
		for (var i =0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password) {
			return true;
	    }
	}
	return false;
}

function signIn(username, password)  {
	if(isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}


//user login prompt
var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);

