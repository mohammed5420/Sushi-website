const search = document.querySelector('.search');
const searchBtn = document.querySelector('#search-icon');
const humberger = document.querySelector('.humberger');
const navBar  = document.querySelector('.nav-bar');
const header = document.querySelector('header');
const serchBar = document.querySelector('.search-contener');
//search event

searchBtn.addEventListener('click' , function(){
    search.style.opacity = '1';
    search.style.width = '160px';
    serchBar.style.width = '200px';
});

//humerger events

humberger.addEventListener('click' , function(){
    navBar.classList.toggle('open-nav');
    header.classList.toggle('header-opacity');
    humberger.classList.toggle('active-berger');
});

//card counter event

const elements = document.querySelectorAll('.count');
const statistic = document.querySelector('.statistics');

let countingOnScroll = function () {
    elements.forEach( ele => {
        var counterEnd = ele.getAttribute('data-target');
        var time = setInterval( main(counterEnd , ele), 10);
        var counter;
        function main (limit , el){
            var i = 0;
            return counter = function () {
                if( i <= limit){
                    el.textContent = i;
                }else{
                    clearInterval(time);
                }
                i++;
            }
        }
    });
}

const options = { threshold: .5};
const observer = new IntersectionObserver( function(entries , observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            countingOnScroll();
        }
    });
}, options);

observer.observe(statistic);


search.addEventListener('keyup' , filter);
const sections = document.querySelectorAll('.search-item');

 function filter(e) {
    let searchInput = e.target.value.toLowerCase();
    console.log(searchInput);

    sections.forEach( section => {
        if(section.getAttribute('data-search').indexOf(searchInput) != -1){
            section.style.display = 'block';
        }else {
            section.style.display = 'none';
        }
    });

}
