const btnMenu = document.getElementById("btnMenu")
const menu = document.getElementById("menu")
const menuMore = document.querySelectorAll(".more") 

btnMenu.addEventListener("click",()=>{
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        btnMenu.src = "/images/icon-hamburger.svg";
    } else {
        menu.classList.add("active");
        btnMenu.src = "/images/icon-close.svg";
    }
})

menuMore.forEach(more => {
    more.addEventListener("click", () => {
        const subMenu = more.nextElementSibling;
        subMenu.style.display = subMenu.style.display === "none" ? "flex" : "none";
    })
})