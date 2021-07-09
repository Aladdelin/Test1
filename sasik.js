const search = document.querySelector('.header-search-field');
const searchButton = document.querySelector('.header-menu-search-btn');
const fieldFree = document.querySelector('.header-description-wrapper');

searchButton.addEventListener('click', () => {

    search.classList.toggle("header-menu-search-btn-active");

})
fieldFree.addEventListener('click', () => {

    if (search.classList.contains("header-menu-search-btn-active")) {
        console.log('спать');

    }

    search.classList.remove("header-menu-search-btn-active");
    console.log(event.target);
})