const menu = document.getElementById
("menu");
const actoin = document.getElementById
("active");

menu.addEventListener("click", ()=>{
  handleMenu();
});

function handleMenu(){
menu.classList.toggle("is-active");
action.classList.toggle("is-active");
}
