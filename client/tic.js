const btn1 = document.querySelector("#one")
const btn2 = document.querySelector("#two")
const btn3 = document.querySelector("#three")
const btn4 = document.querySelector("#four")
const btn5 = document.querySelector("#five")
const btn6 = document.querySelector("#six")
const btn7 = document.querySelector("#seven")
const btn8 = document.querySelector("#eight")
const btn9 = document.querySelector("#nine")

function fnct1(){
    btn1.style.backgroundColor = "blue";
    const id = 1;
    axios.put(`http://localhost:4004/api/tictoc/${id}`)
    .then(res =>{
        let btnDec = res.data
        console.log(btnDec)
        if(btnDec === 2){
            btn2.style.backgroundColor = "red"
        } else if(btnDec === 3){
            btn3.style.backgroundColor = "red"
        } else if(btnDec === 4){
            btn4.style.backgroundColor = "red"
        } else if(btnDec === 5){
            btn5.style.backgroundColor = "red"
        } else if(btnDec === 6){
            btn6.style.backgroundColor = "red"
        } else if(btnDec === 7){
            btn7.style.backgroundColor = "red"
        } else if(btnDec === 8){
            btn8.style.backgroundColor = "red"
        } else if(btnDec === 9){
            btn9.style.backgroundColor = "red"
        }
    })
}
function fnct2(){
    btn2.style.backgroundColor = "blue";
    const id = 2;
    axios.put(`http://localhost:4004/api/tictoc/${id}`)
    .then(res =>{
        let btnDec = res.data
        console.log(btnDec)
        if(btnDec === 1){
            btn1.style.backgroundColor = "red"
        } else if(btnDec === 3){
            btn3.style.backgroundColor = "red"
        } else if(btnDec === 4){
            btn4.style.backgroundColor = "red"
        } else if(btnDec === 5){
            btn5.style.backgroundColor = "red"
        } else if(btnDec === 6){
            btn6.style.backgroundColor = "red"
        } else if(btnDec === 7){
            btn7.style.backgroundColor = "red"
        } else if(btnDec === 8){
            btn8.style.backgroundColor = "red"
        } else if(btnDec === 9){
            btn9.style.backgroundColor = "red"
        }
    })
}
function fnct3(){
    btn3.style.backgroundColor = "blue";
    const id = 3;
    axios.put(`http://localhost:4004/api/tictoc/${id}`)
    .then(res =>{
        let btnDec = res.data
        console.log(btnDec)
        if(btnDec === 1){
            btn1.style.backgroundColor = "red"
        } else if(btnDec === 2){
            btn2.style.backgroundColor = "red"
        } else if(btnDec === 4){
            btn4.style.backgroundColor = "red"
        } else if(btnDec === 5){
            btn5.style.backgroundColor = "red"
        } else if(btnDec === 6){
            btn6.style.backgroundColor = "red"
        } else if(btnDec === 7){
            btn7.style.backgroundColor = "red"
        } else if(btnDec === 8){
            btn8.style.backgroundColor = "red"
        } else if(btnDec === 9){
            btn9.style.backgroundColor = "red"
        }
    })
}
function fnct4(){
    btn4.style.backgroundColor = "blue";
    const id = 4;
    axios.put(`http://localhost:4004/api/tictoc/${id}`)
    .then(res =>{
        let btnDec = res.data
        console.log(btnDec)
        if(btnDec === 1){
            btn1.style.backgroundColor = "red"
        } else if(btnDec === 3){
            btn3.style.backgroundColor = "red"
        } else if(btnDec === 2){
            btn2.style.backgroundColor = "red"
        } else if(btnDec === 5){
            btn5.style.backgroundColor = "red"
        } else if(btnDec === 6){
            btn6.style.backgroundColor = "red"
        } else if(btnDec === 7){
            btn7.style.backgroundColor = "red"
        } else if(btnDec === 8){
            btn8.style.backgroundColor = "red"
        } else if(btnDec === 9){
            btn9.style.backgroundColor = "red"
        }
    })
}
function fnct5(){
    btn5.style.backgroundColor = "blue";
    const id = 5;
    axios.put(`http://localhost:4004/api/tictoc/${id}`)
    .then(res =>{
        let btnDec = res.data
        console.log(btnDec)
        if(btnDec === 1){
            btn1.style.backgroundColor = "red"
        } else if(btnDec === 3){
            btn3.style.backgroundColor = "red"
        } else if(btnDec === 4){
            btn4.style.backgroundColor = "red"
        } else if(btnDec === 2){
            btn2.style.backgroundColor = "red"
        } else if(btnDec === 6){
            btn6.style.backgroundColor = "red"
        } else if(btnDec === 7){
            btn7.style.backgroundColor = "red"
        } else if(btnDec === 8){
            btn8.style.backgroundColor = "red"
        } else if(btnDec === 9){
            btn9.style.backgroundColor = "red"
        }
    })
}
function fnct6(){
    btn6.style.backgroundColor = "blue";
    const id = 6;
    axios.put(`http://localhost:4004/api/tictoc/${id}`)
    .then(res =>{
        let btnDec = res.data
        console.log(btnDec)
        if(btnDec === 1){
            btn1.style.backgroundColor = "red"
        } else if(btnDec === 3){
            btn3.style.backgroundColor = "red"
        } else if(btnDec === 4){
            btn4.style.backgroundColor = "red"
        } else if(btnDec === 5){
            btn5.style.backgroundColor = "red"
        } else if(btnDec === 2){
            btn2.style.backgroundColor = "red"
        } else if(btnDec === 7){
            btn7.style.backgroundColor = "red"
        } else if(btnDec === 8){
            btn8.style.backgroundColor = "red"
        } else if(btnDec === 9){
            btn9.style.backgroundColor = "red"
        }
    })
}
function fnct7(){
    btn7.style.backgroundColor = "blue";
    const id = 7;
    axios.put(`http://localhost:4004/api/tictoc/${id}`)
    .then(res =>{
        let btnDec = res.data
        console.log(btnDec)
        if(btnDec === 1){
            btn1.style.backgroundColor = "red"
        } else if(btnDec === 3){
            btn3.style.backgroundColor = "red"
        } else if(btnDec === 4){
            btn4.style.backgroundColor = "red"
        } else if(btnDec === 5){
            btn5.style.backgroundColor = "red"
        } else if(btnDec === 6){
            btn6.style.backgroundColor = "red"
        } else if(btnDec === 2){
            btn2.style.backgroundColor = "red"
        } else if(btnDec === 8){
            btn8.style.backgroundColor = "red"
        } else if(btnDec === 9){
            btn9.style.backgroundColor = "red"
        }
    })
}
function fnct8(){
    btn8.style.backgroundColor = "blue";
    const id = 8;
    axios.put(`http://localhost:4004/api/tictoc/${id}`)
    .then(res =>{
        let btnDec = res.data
        console.log(btnDec)
        if(btnDec === 1){
            btn1.style.backgroundColor = "red"
        } else if(btnDec === 3){
            btn3.style.backgroundColor = "red"
        } else if(btnDec === 4){
            btn4.style.backgroundColor = "red"
        } else if(btnDec === 5){
            btn5.style.backgroundColor = "red"
        } else if(btnDec === 6){
            btn6.style.backgroundColor = "red"
        } else if(btnDec === 7){
            btn7.style.backgroundColor = "red"
        } else if(btnDec === 2){
            btn2.style.backgroundColor = "red"
        } else if(btnDec === 9){
            btn9.style.backgroundColor = "red"
        }
    })
}
function fnct9(){
    btn9.style.backgroundColor = "blue";
    const id = 9;
    axios.put(`http://localhost:4004/api/tictoc/${id}`)
    .then(res =>{
        let btnDec = res.data
        console.log(btnDec)
        if(btnDec === 1){
            btn1.style.backgroundColor = "red"
        } else if(btnDec === 3){
            btn3.style.backgroundColor = "red"
        } else if(btnDec === 4){
            btn4.style.backgroundColor = "red"
        } else if(btnDec === 5){
            btn5.style.backgroundColor = "red"
        } else if(btnDec === 6){
            btn6.style.backgroundColor = "red"
        } else if(btnDec === 7){
            btn7.style.backgroundColor = "red"
        } else if(btnDec === 8){
            btn8.style.backgroundColor = "red"
        } else if(btnDec === 2){
            btn2.style.backgroundColor = "red"
        }
    })
}
btn1.addEventListener('click', fnct1)
btn2.addEventListener('click', fnct2)
btn3.addEventListener('click', fnct3)
btn4.addEventListener('click', fnct4)
btn5.addEventListener('click', fnct5)
btn6.addEventListener('click', fnct6)
btn7.addEventListener('click', fnct7)
btn8.addEventListener('click', fnct8)
btn9.addEventListener('click', fnct9)