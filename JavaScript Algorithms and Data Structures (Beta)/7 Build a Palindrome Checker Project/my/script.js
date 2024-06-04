const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");

let result = document.getElementById("result");
console.log("never odd or even".replace(/[^A-Za-z0-9]/gi, ''))
btn.addEventListener("click",()=>{check(input)});

function check(words){
  const text = words.value;
  let processedText = text.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  const len = processedText.length;
  let valid = true;
  if (len === 0){
    alert("Please input a value"); return;   
  }
  result.classList.remove("hidden");
  result.style.setProperty("color","black");
  
    for (let i = 0; i < len; i++){
      if (processedText[i] !== processedText[len-1-i]){
        valid = false;
      }
    }
  
  if (valid){
    result.innerText = `${text} is a palindrome`;
    input.value="";
  }else{
    result.innerText = `${text} is not a palindrome`;
    input.value="";
  } 
  return valid;
}


