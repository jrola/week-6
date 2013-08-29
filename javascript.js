
	/*
	Jack Rola
	Week 6
	lab6
	*/	
	
function noSpaceAlphaValidate(str){			// function test if first name has a space
	var noSpaceAlpha = /^[a-zA-Z]+$/;		//function vaidates first name with expresstion.
	return noSpaceAlpha.test(str);			// returns the test if true or false
}

function SpaceAlphaValidate(str){	
	var SpaceAlpha = /^[a-zA-Z\s]+$/;		// function that validates that there can be a space in lastname
	return SpaceAlpha.test(str);			// returns the test results 
}

function emailValidate(str){			// function validates if email has characters, @, and .com
	var email_Validate = /^[a-zA-Z]+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/;
	return email_Validate.test(str);		// returns the test results
}

function commentValidate(str){		// function validates and finds if there is any html tags in comment box
	var comment_validate = /(<([^>]+)>)/ig;
	return str.replace(comment_validate, "");		// replaces if it finds html tags
}



function submitform(){

var fname = document.getElementById('fname');						/* declares fname, so we can use it*/
var error_fname = document.getElementById('error_fname');
var hasErrors = false;
			
		
		if ( !fname.value.length){								/* checks if any words are recorded, and validates it*/
			error_fname.innerHTML = "*";
			fname.className = "error_box";
			hasErrors = true;
			
		}else if(noSpaceAlphaValidate(fname.value) == false){		// calls function, displays message if invalid
			error_fname.innerHTML = "First name should have no spaces or numbers";
			fname.className = "error_box";
			hasErrors = true;
			
		} else {
			error_fname.innerHTML = "";					// if it passes the test the text box turns green
			fname.className = "good_box";
		}
		
var lname = document.getElementById('lname');
var error_lname = document.getElementById('error_lname');			/* checks if any words are recorded, and validates it*/

		if ( !lname.value.length){
			error_lname.innerHTML = "*";
			lname.className = "error_box";
			hasErrors = true;
			
		}else if(SpaceAlphaValidate(lname.value) == false){			 // calls function, displays message if invalid
				error_lname.innerHTML = "Last name can have characters or spaces";
			lname.className = "error_box";
			hasErrors = true;
			
		} else {
			error_lname.innerHTML = "";		//passes the test the text box turns green
			lname.className = "good_box";
		}
				
var email = document.getElementById('email');
var error_email = document.getElementById('error_email');				/* checks if it has a @ and (.) then validates it*/
			
		if ( !email.value.length ){
			error_email.innerHTML = "*";				// starts the validation, if there is an error it will return true and the txtbox will be red
			email.className = "error_box";
			hasErrors = true;
			
		}else if(emailValidate(email.value) == false){			// calls function runs through the tests
			error_email.innerHTML = "email is invalid";
			email.className = "error_box";
			hasErrors = true;
			
		}else if (email.value.indexOf("@") == -1) { 				// error message if textbox is missing @
			error_email.innerHTML = "MISSING (@)";
			email.className = "error_box";
			hasErrors = true;
			
		}else if (email.value.indexOf(".") == -1) { 				// error message if textbox is missing (.)//
			error_email.innerHTML = "MISSING (.)";
			email.className = "error_box";
			hasErrors = true;	
			
		}else{
			error_email.innerHTML = "";
			email.className = "good_box";		// if it passes all the test the textbox will accept and turn green.
		}	
			
var comment = document.getElementById('comment');
var error_comment = document.getElementById('error_comment');
	
		if ( !comment.value.length ){								/* checks if any words are recorded, and validates it */
			error_comment.innerHTML = "*";
			comment.className = "error_box";
			hasErrors = true;
			
		}else if (comment.value.length > 150) { 				// txtbox can not have more then 150 characters, if this it true then it is invalid and turns red
			error_comment.innerHTML = "	to many characters";
			comment.className = "error_box";
			hasErrors = true;
			
		}else{
			error_comment.innerHTML = "";				// if it passes all the test then the txtbox will accept and turn green
			comment.className = "good_box";
			comment.value = commentValidate(comment.value);
			}
	
		if(!hasErrors){
			var confirmation = document.getElementById('confirmation');					/* takes the results makes a new page and displays them*/
			confirmation.style.display = "block";
			var main_form = document.getElementById('main_form');
			main_form.style.display = "none";
			var results = "";
			results += "First Name: " + fname.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
			results += "Last Name: " + lname.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
			results += "Email: " + email.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
			results += "comment: " + comment.value + "<br />";
			var confirmation_result = document.getElementById('confirmation_result');
			confirmation_result.innerHTML =  results;
		
		}
		
	}
		
