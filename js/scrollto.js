const linkDown = document.querySelector('.link--down');
const secondSection = document.querySelector('.section--about_us');
const secondSectionY = secondSection.offsetTop;

let intervalid;



const trackScroll = () => {
    window.scrollBy(0, 40);
    if (window.pageYOffset >= secondSectionY) {
        clearInterval(intervalid)
    }

    console.log(window.pageYOffset);
  

}


linkDown.addEventListener('click', (e) => {
    e.preventDefault()
    intervalid = setInterval(trackScroll, 100)

})


