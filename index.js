const prompt = require('prompt-sync')();

let V = prompt();
let N = prompt();
let B=[];
if(N>10){
    console.log('maximum 10 peoples')
}else{
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
        let i=0,j=0;
        if(a>b){
    return false;
        }
        
        for(;i<a&&j<b;j++){
          if(V[j]==Word[i])
          {
              i++;
          }
        }
        // console.log(i,j,a,b,Word,V);
        return i==a;
    }
}
