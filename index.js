window.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.querySelector(".loader");
    setTimeout(()=> {
        loader.style.display = "none";
        loader.style.transitionDuration = "5s"
    },2000)
    // Categori of Series JS
    const button_group = document.querySelector('.tabheader__items'),
        buttons = document.querySelectorAll('.tabheader__item'),
        contenetList = document.querySelectorAll('.tabcontent');

    function hideTabContent() {
        contenetList.forEach((item) => {
            item.style.display = "none"
        })

        buttons.forEach((item)=> {
            item.classList.remove("tabheader__item_active")
        })
    };

    function showTabContent(i=0) {
        contenetList[i].style.display = "block";
        contenetList[i].classList.add("fade")
        buttons[i].classList.add('tabheader__item_active')
    };

    button_group.addEventListener('click', (e)=>{
       if(e.target.classList.contains('tabheader__item')) {
        buttons.forEach((item, idx)=> {
            if(item === e.target) {
                hideTabContent();
                showTabContent(idx)
            }
        })
       } 
    });

    hideTabContent();
    showTabContent();
});