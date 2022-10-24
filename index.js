let q1 = document.querySelector("#q1");
let q2 = document.querySelector("#q2");
let q3 = document.querySelector("#q3");
let q4 = document.querySelector("#q4");
let btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    let result = "";
    if(q1.value == 8){
     result = result +1;
    }
    if(q2.value == 1){
        result = result +1;
    }
    if(q3.value == 16){
        result = result +1;
    }
    if(q4.value == 2){
        result = result +1;
    }
    if(result === ""){
        alert("решите задачку))");
    }
    alert(`Правильных ответов: ${result}`);
});