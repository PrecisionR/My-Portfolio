function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const card1=document.querySelector(".pc1");
document.addEventListener("mousemove",(e) => {
    rotateElement(e,card1);
})
function rotateElement(event,element){
    const x=event.clientX;
    const y=event.clientY;

    const middleX= window.innerWidth/2;
    const middleY= window.innerHeight/2;

    const offsetX= ((x-middleX)/middleX)*35;
    const offsetY= ((y-middleY)/middleY)*35;
    
    element.style.setProperty("--rotateX", -1*offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
   
}


const card2=document.querySelector(".pc2");
document.addEventListener("mousemove",(e) => {
    rotateElement(e,card2);
})
function rotateElement(event,element){
    const x=event.clientX;
    const y=event.clientY;

    const middleX= window.innerWidth/2;
    const middleY= window.innerHeight/2;

    const offsetX= ((x-middleX)/middleX)*35;
    const offsetY= ((y-middleY)/middleY)*35;
    
    element.style.setProperty("--rotateX", -1*offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
   
}
const card3=document.querySelector(".pc3");
document.addEventListener("mousemove",(e) => {
    rotateElement(e,card3);
})
function rotateElement(event,element){
    const x=event.clientX;
    const y=event.clientY;

    const middleX= window.innerWidth/2;
    const middleY= window.innerHeight/2;

    const offsetX= ((x-middleX)/middleX)*35;
    const offsetY= ((y-middleY)/middleY)*35;
    
    element.style.setProperty("--rotateX", -1*offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
   
}