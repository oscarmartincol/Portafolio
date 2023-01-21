var switchColor = document.querySelector('.switch-color input[type="checkbox"]');
var body = document.getElementById("body");
function cambiarColor(e){
    if(e.target.checked){
        body.classList.add("dark");
        localStorage.setItem("night-mode", "true");
    }else{
        if(body.classList.contains("dark")){
            body.classList.remove("dark");
            localStorage.setItem("night-mode", "false");
        }
    }

}
switchColor.addEventListener("change", cambiarColor, false);

if(localStorage.getItem("night-mode") === "true"){
    body.classList.add("dark");
    switchColor.checked =true;
}else{
    body.classList.remove("dark");
    switchColor.checked =false;    
}