// Numbers, strings, booleans, functions//


//========= Objects ==========//


let users = []; // an empty array


let signinButton = document.querySelector(".sign-in-button"); //  turns html classes into variables

let nameInput = document.querySelector(".name");

let companyInput = document.querySelector(".company");

let genderInput = document.querySelector(".gender")

// let submitGenderButton = document.querySelector(".submit-gender") // declared below for hw purposes 

let welcomeNameSpan = document.querySelector(".welcome-name");

let welcomeNumberSpan = document.querySelector(".welcome-number");

// hw part 5

let men =[];
let women =[];
let other =[];
let menStatSpan = document.querySelector(".statM")
let womenStatSpan = document.querySelector (".statF")
let otherStatSpan = document.querySelector(".statO")

signinButton.onclick = function(){
	console.log("clicky")

	let name = nameInput.value;
	let company= companyInput.value;
	let gender = genderInput.value;
	welcomeNameSpan.innerText = name + "!"; // NOTE CAMEL TEXT for innerText is crucial/
	console.log(name,company)

	let user ={			// this object contains the info to collect on a new user
		name: name,
		company: company,
		gender: gender,
	}

	users.push(user) // this adds new users to the array at the top

  
	welcomeNumberSpan.innerText = convertToOrdinal (users.length);

  //STEP 3 BELOW  

	let purple = "#A487FF";
	let pink = "#FF82A8";
	let blue = "#74D6FF";
	//  first I turned the background colors into variables. 
	// then I created a function that changes the background color 
	//	based on those variables >> document.body.style.background = blue;
	// and set if/else comparisons that compared the gender to the HTML value




   if (gender == "m") {
		document.body.style.background = blue;
		men.push(user)
		menStatSpan.innerText = men.length;
	}

	else if (gender == "f") {
		document.body.style.background = pink;
		women.push(user)
		womenStatSpan.innerText = women.length;
	}

	else if (gender == "o"){
		document.body.style.background = purple;
		other.push(user)
		otherStatSpan.innerText = other.length;
	}

   // step 4

	nameInput.value= "";
	companyInput.value="";

  // step 5 written above: linkis js to HTML
   // let menStatSpan = document.querySelector(".statM")
  // let girlStatSpan = document.querySelector (".statF")
 // let otherStatSpan = document.querySelector("statO")

 // i want to quantify the gender types. 
 
	

}

let convertToOrdinal = function (num){

	if (num === 1) {
		return "1st";
	}
	if (num === 2) {
		return "2nd";
	} 
	if (num === 3) {
		return "3rd";
	} 

	if (num > 33 & num < 21){
		return num + "th"
	}
	if (num % 10 === 1) // if the  modulus (% a.k. a remainder of fraction) is a one, return "st"
		return + "st"
	if (num % 10 === 2)
		return + "nd"
	if (num % 10 === 3)
		return + "rd"
}

		
// FAILED CODE //

		// let submitGenderButton = document.querySelector(".submit-gender");

		// let test = document.querySelector(".m");


		// let blue = '#74D6FF';
		// let pink = '#FF82A8';
		// let purple = '#A487FF';
		// let non = "#ccc";

		// function changeBackground(color) {
		//      document.body.style.background = color;
		//     } // changes the background color to the declared variables above

		// submitGenderButton.onclick = function(){ //  runs when "submit gender button" is clicked. 
		// 	console.log("clicky 2") 

		// 	if (genderInput.value = ) {

		// 		 document.body.style.background = purple;
		// 	}
			
		// }

// I want to connect the JS to CSS body color.
// 	1. I declare all of the colors variables. i.e let blue = #74d
// 	2. I declare a function that changes the color of the background 
     //  based on the variable input >> if (statement) {
	 //                          document.body.style.background = blue;}
	 

// Then I want to equate body color with gender
//	3. By declaring gender inside the submitButton function, the function 
//     knows the value of "m" "f" and "o". 

//then i want to tell it to compare submitGenderbutton with color 
//     and display the color in the background. 
 
 //    4. I create if statments that would check the gender input
// 		and change the backhground color based on it. 
//		if (gender = "m") {
	 //  document.body.style.background = blue;}		

// END FAILED CODE // 










// HW NOTES //

// ========PART 1 & 2 -- ADD GENDERS TO ARRAY========= //

// 1. ADDED let gender input = document.querySelector(".gender")
// 2. let gender = genderInput.value;
// 3. ADDED gender: gender, in user array
// 4. Added a gender array, button to submit gender values, 
// 	and console log test for button:
// 	let gender = []; // an empty array
// 	let submitGenderButton = document.querySelector(".submit-gender"); //  turns html classes into variables
// 	submitGenderButton.onclick = function(){
// 	console.log("2 clicky")
// 	}
// NOTE: THIS TURNS THE SELECT OPTIONS INTO A VALUE, CREATES A BUTTON, COLLECTS THAT DATA, 
//       AND ADDS IT TO THE USER ARRAY UNDER THE GENDER CATEGORY. 

//======== PART 3 -- CHANGE COLORS DEPENDING ON GENDER============= //

//Note: submitGenderButton was later removed as all code
// 		should happen within signInButton.onclick function. 

// 	1. I declare all of the colors variables. i.e let blue = #74d
// 	2. I declare a function that changes the color of the background 
     //  based on the variable input >> if (statement) {
	 //                          document.body.style.background = blue;}
	 

// Then I want to equate body color with gender
//	3. By declaring gender inside the submitButton function, the function 
//     knows the value of "m" "f" and "o" in HTML. I want to tell it to 
//     compare gender with a specific value and display the color in the background. 
 
 //    4. I create if statments that would check the gender input
// 		and change the backhground color based on it. 
//		if (gender = "m") { document.body.style.background = blue;}	

//================= Part 4 - Clear values ==============//

//  add inside submitButton.conclick at bottom
	// nameInput.value= "";
	// companyInput.value="";	

//================= Part 5 - Visibile tally ==============//

// 1. First I created empty arrays to seperate genders
// 	let men =[];
// 	let women =[];
// 	let other =[];
// NOTE: This must be written outside and above the submitInputButton.onclicik function.

// 2. Then I connected the HTML placeholders to JS variables
// 	let menStatSpan = document.querySelector(".statM")
// 	let womenStatSpan = document.querySelector (".statF")
// 	let otherStatSpan = document.querySelector(".statO")

// 3. Then I told the if staement to add new inputs it proves to the gendered array
//  	if (gender == "m") {
//		document.body.style.background = blue;
//		men.push(user) // adds user to men array
//		menStatSpan.innerText = men.length;} // changes span to number of men





