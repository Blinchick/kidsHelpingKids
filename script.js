// for navigation bar styling on scroll
const sections = document.querySelectorAll("section");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-400px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        const hash = '#' + entry.target.id;
        const nav = document.querySelector(`a[href="${hash}"]`);
        console.log(entry)
        if (!entry.isIntersecting) {
            nav.classList.remove('active')
        } 
        else {
            nav.classList.add('active');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// mobile menu
$("i.fa-bars").on("click", function() {
    $(".header-bottom_menu").css("display", "inline");
    $("i.fa-bars").css("display", "none");
    $("i.fa-times-circle").css("display", "inline");
});

$("i.fa-times-circle").on("click", function () {
    $(".header-bottom_menu").css("display", "none");
    $("i.fa-times-circle").css("display", "none");
    $("i.fa-bars").css("display", "inline");
});