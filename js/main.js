// real time inputs to the cards
const inputs = document.querySelectorAll("input");
const outputs = document.querySelectorAll(".left-side #output");
outputs.forEach((output, index)=>{
    realTime(inputs[index], output);
})
//------------------------------------------
const form = document.querySelector("form");
form.onsubmit = function(e){
    inputs.forEach((input, index)=>{
        if(!checkValidity(input)){
            e.preventDefault()
        }
    });
    e.preventDefault()
}
//------------------------------------------------
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