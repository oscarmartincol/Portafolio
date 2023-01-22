var codigo = document.getElementById("codigos");
var list = document.querySelectorAll(".acordeon");

codigo.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link")){
        RemoveAll();
        e.target.children[2].classList.toggle("rotate");
        var value= e.target.parentElement;
        value.classList.toggle("size");
    }
})

const RemoveAll=() => {
    for(var index of list){
        index.classList.remove(".size");
    }
}
