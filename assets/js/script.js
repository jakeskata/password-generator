
// how long from 8 - 120
const init = () => {
  console.log('Hello world!!');
  let len = prompt("How long would you like your password to be (8-128)?");

  if (len < 8 || len > 128 || isNaN(len)) {
    alert('Criteria did not match!  Please try again.');
    return init();
  } 

  let special = confirm('would your password have special characters?');
  let lower = confirm('would your password have lowercase letters?');
  let upper = confirm('would your password have uppercase letters?');
  let numbers = confirm('would your password have numbers?');

let temp = '';
if(special) temp += '!@#$%^&*()_-+?~';
if(lower) temp += "abcdefghijklmnopqrstuvwxyz";
if(upper) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(numbers) temp += "0123456789";

let passwd = "";

for(let i=0;i<len;i++){
  passwd += temp[Math.floor(Math.random()*temp.length)];
}

  console.log(temp);
  document.getElementById("password").innerText=passwd
};

document.getElementById('generate').addEventListener('click', init)













// would have uppercase
// would have numbers
// would have uppercase
// would have spcial charaters