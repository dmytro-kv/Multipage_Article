"use strict";

document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetItem = e.target;

  if (targetItem.closest(".menu-topics__item")) {
    const tabNavItem = targetItem.closest(".menu-topics__item");
    if (!tabNavItem.classList.contains("active")) {
      const activetabNavItem = document.querySelector(
        ".menu-topics__item.active"
      );
      activetabNavItem.classList.remove("active");
      tabNavItem.classList.add("active");

      const tabItems = document.querySelectorAll(".topics__tab");
      const activeTabItem = document.querySelector(".topics__tab.active");

      activeTabItem.classList.remove("active");
      tabItems[getIndex(tabNavItem)].classList.add("active");
    }
  }
}
function getIndex(el) {
  return Array.from(el.parentNode.children).indexOf(el);
}
