window.onload = function(){
        burger = document.querySelector("#menu");
        navBar = document.querySelector("#navbar-display");
        body = document.querySelector("#body");
        hide = document.querySelector("#hide");
        burger.onclick = function() {
            navBar.classList.toggle("active");
            body.classList.toggle("active");
        }
        hide.onclick = function(){
            navBar.classList.remove("active");
            body.classList.remove("active");
        }
};