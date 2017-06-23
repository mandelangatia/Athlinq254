//USER LOGIC INTERFACE

function validate(){

//GET THE ERROR OBJECTS
var nameerror = document.getElementById("name");
var doberror = document.getElementById("dob");
var heighterror = document.getElementById("height");
var teamerror = document.getElementById("team");
var numbererror = document.getElementById("number");

//GETTING EVENT LISTENER OBJECTS
document.registration.name.addEventListener("blur", nameverify, true);
document.registration.dob.addEventListener("blur", dobverify, true);
document.registration.height.addEventListener("blur", heightverify, true);
document.registration.team.addEventListener("blur", teamverify, true);
document.registration.number.addEventListener("blur", numberverify, true);


//CHECKING NAME VALIDATION
if(document.registration.name.value == ""){
	nameerror.style.display = "block";
	return false;

}

//CHECKING DOB VALIDATION
if(document.registration.dob.value == ""){
	doberror.style.display = "block";
	return false;

}

//CHECKING HEIGHT VALIDATION
if(document.registration.height.value == ""){
	heighterror.style.display = "block";
	return false;

}

//CHECKING TEAM VALIDATION
if(document.registration.team.value == ""){
	teamerror.style.display = "block";
	return false;

}

//CHECKING NUMBER VALIDATION
if(document.registration.number.value == ""){
	numbererror.style.display = "block";
	return false;

}


function nameverify(){
	if (document.registration.name.value != ""){
		nameerror.style.display = "none";
		return true;

	}

}


function dobverify(){
	if (document.registration.dob.value != ""){
		doberror.style.display = "none";
		return true;

	}

}



function heightverify(){
	if (document.registration.height.value != ""){
		heighterror.style.display = "none";
		return true;

	}

}


function teamverify(){
	if (document.registration.team.value != ""){
		teamerror.style.display = "none";
		return true;

	}

}



function numberverify(){
	if (document.registration.number.value != ""){
		numbererror.style.display = "none";
		return true;

	}

}


}
