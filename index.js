const prompt = require('prompt-sync')();

let V = prompt();
let N = prompt();
let B=[];

for(let i=0;i<N;i++){
    B.push(prompt())
}


B.forEach(element=>{
    if(check(element,V)){
        console.log("Positive")
    }else{
        console.log("Negative")
    }
})
function check(Word,V){
    let a= Word.length;
    let b = V.length;
    let i=0,j=0
    for(;i<a&&j<b;i++){
      if(V[i]==Word[j])
      {
          j++;
      }
    }
    return j==a;
}