let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 7000); // Change image every 2 seconds
}

function portfolioSwitch(event, portfolioName) {
    let item = document.getElementsByClassName("portfolioItem");
    for (let index = 0; index < item.length; index++) {
        item[index].style.display = "none";
    }
    let tabs = document.getElementsByClassName("tab");
    for (let index = 0; index < tabs.length; index++) {
        tabs[index].className = tabs[index].className.replace(" selectedButton", "");
    }

    document.getElementById(portfolioName).style.display = "grid";
    event.currentTarget.className += " selectedButton";
}