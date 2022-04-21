function myfunc(){

    var b1 = document.querySelector("#b1").value
    var b2 = document.querySelector("#b2").value
    var b3 = document.querySelector("#b3").value
    var b4 = document.querySelector("#b4").value
    var b5 = document.querySelector("#b5").value
    var b6 = document.querySelector("#b6").value
    var b7 = document.querySelector("#b7").value
    var b8 = document.querySelector("#b8").value
    var b9 = document.querySelector("#b9").value


    if((b1 == 'x' || b1 == 'X' ) && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')){
        document.querySelector("#won").innerHTML = "Player X won"
        b4 = document.querySelector("#b4").disabled = true;
        b5 = document.querySelector("#b5").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        b7 = document.querySelector("#b7").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        b9 = document.querySelector("#b9").disabled = true;
        window.alert("Player X won")

    }
    else if((b1 == '0') && (b2 == '0') && (b3 == '0')){
        document.querySelector("#won").innerHTML = "Player 0 won"
        b4 = document.querySelector("#b4").disabled = true;
        b5 = document.querySelector("#b5").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        b7 = document.querySelector("#b7").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        b9 = document.querySelector("#b9").disabled = true;
        window.alert("Player 0 won")
        
    }

    else if((b4 == 'x' || b4 == 'X' ) && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X')){
        document.querySelector("#won").innerHTML = "Player X won"
        b1 = document.querySelector("#b1").disabled = true;
        b2 = document.querySelector("#b2").disabled = true;
        b3 = document.querySelector("#b3").disabled = true;
        b7 = document.querySelector("#b7").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        b9 = document.querySelector("#b9").disabled = true;
        window.alert("Player X won")

    }
    else if((b4 == '0') && (b5 == '0') && (b6 == '0')){
        document.querySelector("#won").innerHTML = "Player 0 won"
        b1 = document.querySelector("#b1").disabled = true;
        b2 = document.querySelector("#b2").disabled = true;
        b3 = document.querySelector("#b3").disabled = true;
        b7 = document.querySelector("#b7").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        b9 = document.querySelector("#b9").disabled = true;
        window.alert("Player 0 won")

    }

    else if((b1 == 'x' || b1 == 'X' ) && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.querySelector("#won").innerHTML = "Player X won"
        b2 = document.querySelector("#b2").disabled = true;
        b3 = document.querySelector("#b3").disabled = true;
        b5 = document.querySelector("#b5").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        b9 = document.querySelector("#b9").disabled = true;
        window.alert("Player X won")

    }
    else if((b1 == '0' ) && (b4 == '0' ) && (b7 == '0' )){
        document.querySelector("#won").innerHTML = "Player 0 won"
        b2 = document.querySelector("#b2").disabled = true;
        b3 = document.querySelector("#b3").disabled = true;
        b5 = document.querySelector("#b5").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        b9 = document.querySelector("#b9").disabled = true;
        window.alert("Player 0 won")

    }

    else if((b7 == 'x' || b7 == 'X' ) && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.querySelector("#won").innerHTML = "Player X won"
        b1 = document.querySelector("#b1").disabled = true;
        b2 = document.querySelector("#b2").disabled = true;
        b3 = document.querySelector("#b3").disabled = true;
        b4 = document.querySelector("#b4").disabled = true;
        b5 = document.querySelector("#b5").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        window.alert("Player X won")

    }
    else if((b7 == '0' ) && (b8 == '0') && (b9 == '0')){
        document.querySelector("#won").innerHTML = "Player 0 won"
        b1 = document.querySelector("#b1").disabled = true;
        b2 = document.querySelector("#b2").disabled = true;
        b3 = document.querySelector("#b3").disabled = true;
        b4 = document.querySelector("#b4").disabled = true;
        b5 = document.querySelector("#b5").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        window.alert("Player 0 won")

    }

    else if((b2 == 'x' || b2 == 'X' ) && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')){
        document.querySelector("#won").innerHTML = "Player X won"
        b1 = document.querySelector("#b1").disabled = true;
        b7 = document.querySelector("#b7").disabled = true;
        b3 = document.querySelector("#b3").disabled = true;
        b4 = document.querySelector("#b4").disabled = true;
        b9 = document.querySelector("#b9").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        window.alert("Player X won")

    }
    else if((b2 == '0') && (b5 == '0') && (b8 == '0')){
        document.querySelector("#won").innerHTML = "Player 0 won"
        b1 = document.querySelector("#b1").disabled = true;
        b7 = document.querySelector("#b7").disabled = true;
        b3 = document.querySelector("#b3").disabled = true;
        b4 = document.querySelector("#b4").disabled = true;
        b9 = document.querySelector("#b9").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        window.alert("Player 0 won")

    }

    else if((b3 == 'x' || b3 == 'X' ) && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.querySelector("#won").innerHTML = "Player X won"
        b1 = document.querySelector("#b1").disabled = true;
        b7 = document.querySelector("#b7").disabled = true;
        b5 = document.querySelector("#b5").disabled = true;
        b4 = document.querySelector("#b4").disabled = true;
        b2 = document.querySelector("#b2").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        window.alert("Player X won")

    }
    else if((b3 == '0') && (b6 == '0') && (b9 == '0')){
        document.querySelector("#won").innerHTML = "Player 0 won"
        b1 = document.querySelector("#b1").disabled = true;
        b7 = document.querySelector("#b7").disabled = true;
        b5 = document.querySelector("#b5").disabled = true;
        b4 = document.querySelector("#b4").disabled = true;
        b2 = document.querySelector("#b2").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        window.alert("Player 0 won")

    }

    else if((b1 == 'x' || b1 == 'X' ) && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')){
        document.querySelector("#won").innerHTML = "Player X won"
        b2 = document.querySelector("#b2").disabled = true;
        b3 = document.querySelector("#b3").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        b4 = document.querySelector("#b4").disabled = true;
        b7 = document.querySelector("#b7").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        window.alert("Player X won")

    }
    else if((b1 == '0') && (b5 == '0') && (b9 == '0')){
        document.querySelector("#won").innerHTML = "Player 0 won"
        b2 = document.querySelector("#b2").disabled = true;
        b3 = document.querySelector("#b3").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        b4 = document.querySelector("#b4").disabled = true;
        b7 = document.querySelector("#b7").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        window.alert("Player 0 won")

    }

    else if((b3 == 'x' || b1 == 'X' ) && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')){
        document.querySelector("#won").innerHTML = "Player X won"
        b2 = document.querySelector("#b2").disabled = true;
        b1 = document.querySelector("#b1").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        b4 = document.querySelector("#b4").disabled = true;
        b9 = document.querySelector("#b9").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        window.alert("Player X won")
    }
    else if((b3 == '0') && (b5 == '0') && (b7 == '0')){
        document.querySelector("#won").innerHTML = "Player 0 won"
        b2 = document.querySelector("#b2").disabled = true;
        b1 = document.querySelector("#b1").disabled = true;
        b6 = document.querySelector("#b6").disabled = true;
        b4 = document.querySelector("#b4").disabled = true;
        b9 = document.querySelector("#b9").disabled = true;
        b8 = document.querySelector("#b8").disabled = true;
        window.alert("Player 0 won")

    }

    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
        b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
        b8 == '0') && (b9 == 'X' || b9 == '0')) {
            document.getElementById('won').innerHTML = "Match Tie";
          
    }

    else{
        if(flag == 1){
            document.getElementById('won').innerHTML = "Player X turn";
        }
        else{
            document.getElementById('won').innerHTML = "Player 0 turn";

        }
    }
}

function myfunc_2(){
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
}
flag = 1;
function myfunc_3(){
    if(flag == 1){
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }

    else{
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag =1;
    }
}
function myfunc_4(){
    if(flag == 1){
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }

    else{
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
function myfunc_5(){
    if(flag == 1){
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }

    else{
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag =1;
    }
}
function myfunc_6(){
    if(flag == 1){
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }

    else{
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
function myfunc_7(){
    if(flag == 1){
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }

    else{
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
function myfunc_8(){
    if(flag == 1){
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }

    else{
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}
function myfunc_9(){
    if(flag == 1){
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }

    else{
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}
function myfunc_10(){
    if(flag == 1){
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;

    }

    else{
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}
function myfunc_11(){
    if(flag == 1){
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }

    else{
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disabled = true;
        flag = 1;

    }
}