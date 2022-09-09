const openmenu=()=>{
    document.querySelector('.blur').className = "blur active";
    document.querySelector('aside').className = "active";
}
const closemenu=()=>{
    document.querySelector('.blur').className = "blur";
    document.querySelector('aside').className = "";
}



document.getElementById("menubtn").onclick=e=>{
    e.preventDefault();
    openmenu();
}
document.querySelector(".close").onclick=closemenu;

document.querySelector(".blur").addEventListener('click',closemenu);