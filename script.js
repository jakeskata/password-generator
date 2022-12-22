// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword (){
  console.log("Hey! You clicked the button!");
  

  // 1. Prompt the user for the password criteria

  var passwordLength = prompt("How long should your password be?")
  undefined
  passwordLength
  '12'
  var useLowerCase = confirm("Should your passwordhave have lowercase characters?")
  undefined
  useLowerCase
  true
  var possibleCharacters = []
  undefined
  var lowerCase = ["a","b","c"]
  undefined
  var upperCase = ["A","B","C"]
  undefined
  var numbers = ["1","2","3"]
  undefined
  possibleCharacters.push(...lowerCase)
  3
      possibleCharacters
      (6) ['a', 'b', 'c', '1', '2', '3']
   possibleCharacters[Math.random() * possibleCharacters.length)]
   'c' 
   possibleCharacters[Math.random() * possibleCharacters.length)]
   'b'
   possibleCharacters[Math.random() * possibleCharacters.length)]
   'c'
   possibleCharacters[Math.random() * possibleCharacters.length)]
   '2'
   possibleCharacters[Math.random() * possibleCharacters.length)]
   'c'
   possibleCharacters[Math.random() * possibleCharacters.length)]
   'b'
   possibleCharacters[Math.random() * possibleCharacters.length)]
   'c'
   randomIndex = Math.floor(Math.random() * possibleCharacters.length)
   0
   possibleCharacters[randomIndex]
   'a'



  const status = prompt("Password Length 8 < 128")



  //   a. Password Length 8 < 128
  //   b. Lowercase, uppercase, numbers, special characters
  // 2. Validate the input.
  // 3. Generate password based on criteria.


  // 4. Display password to the page.
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
