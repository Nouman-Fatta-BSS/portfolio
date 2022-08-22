const p_btns = document.querySelector("#portfolio-section > div.p-btns");
const btns = document.querySelectorAll("#portfolio-section > div.p-btns .p-btn");
const portfolio_images = document.querySelectorAll(".img-overlay");
p_btns.addEventListener(('click'), ({ target }) => {
    const dataNum = target.dataset?.btnNum
    if (dataNum) {
        btns.forEach(btn => btn.classList.remove('active'))
        target.classList.add('active')
        portfolio_images.forEach(currentElement => {
            if (!currentElement.classList.contains(`p-btn--${dataNum}`)) {
                currentElement.classList.add('hide')
            } else {
                currentElement.classList.remove('hide')
            }
        });
    }
})