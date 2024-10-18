function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    if(this.scrollY >= 350) scrollup.classList.add('show-scroll');
    else scrollup.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollup);


const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);
            
            tabContents.forEach((tabContent)=> {
                tabContent.classList.remove('tab__active');
            });

            target.classList.add('tab__active');

            tabs.forEach((tab) => {
                tab.classList.remove('tab__active');
            })

            tab.classList.add('tab__active');
        });
    });