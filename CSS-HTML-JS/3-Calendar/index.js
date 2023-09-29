const monthInx= new Date().getMonth();
const monthE1=document.querySelector(".date h1")
const daysE1=document.querySelector(".days")



const fullDate= new Date();
const fullDateE1=document.querySelector(".date p")
const lastDay =new Date(new Date().getFullYear(), monthInx+1,0).getDate();
const firstDay =new Date(new Date().getFullYear(), monthInx,1).getDay()-1;
const month=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
monthE1.innerText=month[monthInx]
fullDateE1.innerText=new Date().toDateString();

console.log(firstDay)

let days = "";
for(let i=firstDay; i>0; i--){
    days += `<div class='empty'></div>`;
}

for(let i=1; i<=lastDay; i++){
    if(i === new Date().getDate()){
        days += `<div class='today'>${i}</div>`
    }else{
        days += `<div>${i}</div>`
    }
    

}

daysE1.innerHTML = days;