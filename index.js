const back = document.querySelector("#back");
const next = document.querySelector("#next");
const buttonTip =document.querySelector("#addServ");
buttonTip.addEventListener("click", showTip);
function showTip(e){
    e.preventDefault();
    services.style.display ="block";
}

const button = document.querySelector("#btnCalc");
button.addEventListener("click", calculateAmount);
function calculateAmount(e){
    e.preventDefault();
const night=document.querySelector("#night").value;
const people=document.querySelector("#people").value;
const services=document.querySelector("#services").value;
if(night==="" || people ==="" || people<1){
    Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter your information!',
    })
}
let amountPerNight=night*200;
let tipPerServices = (people*services)*night;
let totalSum = amountPerNight + tipPerServices;
let totalPerPerson = totalSum/people;

amountPerNight = amountPerNight.toFixed(2);
tipPerServices = tipPerServices.toFixed(2);
totalSum = totalSum.toFixed(2);
totalPerPerson = totalPerPerson.toFixed(2);


document.querySelector("#dividedBill").textContent = amountPerNight;
document.querySelector("#dividedOption").textContent = tipPerServices;
document.querySelector("#billAndService").textContent = totalSum ;
document.querySelector("#billPerPerson").textContent = totalPerPerson;
}


const photosOne =["/image/1.jpg","/image/2.jpg","/image/3.jpg","/image/4.jpg","/image/5.jpg","/image/6.jpg","/image/7.jpg","/image/8.jpg","/image/9.jpg","/image/10.jpg","/image/11.jpg","/image/12.jpg","/image/13.jpg"];

let i = 0;
next.addEventListener("click",()=>{
    i++;
    if(i>photosOne.length-1){
        i=0;
    }
    document.querySelector("#picturesOne").src = photosOne[i];
})

back.addEventListener("click",()=>{
    i--;
    if(i<0){
        i=photosOne.length-1;
    }
    document.querySelector("#picturesOne").src = photosOne[i];
    
})







