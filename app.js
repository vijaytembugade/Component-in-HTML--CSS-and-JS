const btn = document.querySelector(".btn")
const text = document.querySelector(".text")

let shown = true;

function toggleText(){
    if(shown){
        btn.innerHTML = "click again to see the text 👀";
        text.style.opacity = 0;
    }else{
        btn.innerHTML = "click me to hide text 🙈";
        text.style.opacity = 1;
    }
    shown = !shown
}


btn.addEventListener("click", ()=>toggleText())