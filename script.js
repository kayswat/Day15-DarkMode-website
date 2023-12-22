const icon = document.getElementById("sun");

function darkMode(){
 document.body.classList.toggle("darkMode");   
 if(document.body.classList.contains("darkMode")){
    icon.src = "images/sun.png";
 }else{
    icon.src = "images/moon.png"
 }
}

icon.addEventListener("click", darkMode )
