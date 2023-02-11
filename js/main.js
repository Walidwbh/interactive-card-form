// real time inputs to the cards
const holderName = document.querySelector("input[name=name]");
const cardNumber = document.querySelector("input[name=number]");
const month = document.querySelector("input[name=month]");
const year = document.querySelector("input[name=year]");
const cvc = document.querySelector("input[name=cvc]");
console.log(cvc)
const form = document.querySelector("form");
function realTime(input, output){
    let oldContent = output.innerHTML;
    input.onkeyup = function() {
        output.innerHTML = input.value;    
    }
    input.onblur = function(){
        if(output.innerHTML =="")
        output.innerHTML = oldContent;
    }
}
realTime(holderName, document.querySelector(".front-card .cardholder-name"));
realTime(cardNumber, document.querySelector(".front-card .card-number"));
realTime(month, document.querySelector(".front-card .exp-date .month"));
realTime(year, document.querySelector(".front-card .exp-date .year"));
realTime(cvc, document.querySelector(".back-card .cvc"));
function checkValidity(element){
    if(!element.value){
        element.nextElementSibling.innerHTML = "Can't be blank";
        element.classList.add("error")
        return false
    }else{
        element.nextElementSibling.innerHTML ="";
        element.classList.remove("error")
        return true
    }
}
form.onsubmit = function(event){
    if(!checkValidity(holderName)){
        event.preventDefault()
    }else if(!checkValidity(cardNumber)){
        event.preventDefault()
    }else if(isNaN(cardNumber.value)){
        cardNumber.classList.add("error");
        cardNumber.nextElementSibling.innerHTML="Wrong format, numbers only";
        event.preventDefault()
    }else if(!checkValidity(month)){
        event.preventDefault()
    }else if(!checkValidity(year)){
        event.preventDefault()
    }else if(!checkValidity(cvc)){
        event.preventDefault()
    }
}