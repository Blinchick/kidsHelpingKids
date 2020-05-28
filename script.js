const sections = document.querySelectorAll("section");

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-270px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        const hash = '#' + entry.target.id;
        const nav = document.querySelector(`a[href="${hash}"]`);
        console.log(entry)
        if (entry.isIntersecting) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
})