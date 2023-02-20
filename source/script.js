window.onload = function () {
    console.log('Страница успешно загружена')

    function handleClick(event) {
        const nav = document.querySelector('.nav')

        if (event.currentTarget.classList.contains('nav-burger_on')) {
            event.currentTarget.classList.remove('nav-burger_on');
            nav.classList.add('nav_off');
        } else {
            event.currentTarget.classList.add('nav-burger_on');
            nav.classList.remove('nav_off');
        }
    }

    const navBurger = document.querySelectorAll('.nav-burger');

    navBurger.forEach((item) => {
        item.addEventListener('click', handleClick);
    });
};
