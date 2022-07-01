const toggleMenu = document.querySelector(".toggle-menu")
const linksContainer = document.querySelector(".links-container")
toggleMenu.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links")
})
