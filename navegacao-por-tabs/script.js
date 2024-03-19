<<<<<<< HEAD
const tabmenu = document.querySelectorAll(".js-tabmenu li");

const tabContent = document.querySelectorAll(".js-tabcontent section");


if(tabmenu.length && tabContent.length){

tabContent[0].classList.add("ativo");

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove("ativo");
  });

  tabContent[index].classList.add("ativo");
}

tabmenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener("click", () => {
    activeTab(index);
  });
});

=======
const tabmenu = document.querySelectorAll(".js-tabmenu li");

const tabContent = document.querySelectorAll(".js-tabcontent section");


if(tabmenu.length && tabContent.length){

tabContent[0].classList.add("ativo");

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove("ativo");
  });

  tabContent[index].classList.add("ativo");
}

tabmenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener("click", () => {
    activeTab(index);
  });
});

>>>>>>> 7eae2085d0a27874c835ee9438c8ff0e3c5642cc
}