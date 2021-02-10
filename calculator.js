
function action(operator){
    var num1 = parseInt(document.getElementById("num1").value, 10);
    var num2 = parseInt(document.getElementById("num2").value, 10);
    var answer;
    if(operator==="+"){
        answer=(num1+num2);
    }
    else if(operator==="-"){
        answer=(num1-num2);
    }
    else if(operator==="*"){
        answer=(num1*num2);
    }
    else if(operator==="/"){
        answer=(num1/num2);
    }

    document.getElementById("result").value=answer;
}

